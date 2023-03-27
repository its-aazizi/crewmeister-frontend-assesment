const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const bodyParser = require("body-parser");
const router = express.Router();

app.use(
      bodyParser.urlencoded({
            extended: true,
      })
);
app.use(bodyParser.json());
app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
});
app.use("/api", router);

const ITEMS_PER_PAGE = 10;
const ABSENCE_STATUS = {
      REQUESTED: "Requested",
      CONFIRMED: "Confirmed",
      REJECTED: "Rejected",
};
const format = require("date-fns/format");
const parseISO = require("date-fns/parseISO");
const differenceInDays = require("date-fns/differenceInDays");
const absences = require("./json_files/absences.json").payload;
const members = require("./json_files/members.json").payload;

router.get("/absences", async (req, res) => {
      let {page, date = "", type = ""} = req.query;
      let _absences = absences;

      if (!!date) {
            _absences = _absences.filter(
                  ({startDate, endDate}) =>
                        new Date(startDate) <= new Date(date) &&
                        new Date(endDate) >= new Date(date)
            );
      }

      if (!!type) {
            _absences = _absences.filter((absence) => absence.type === type);
      }

      _absencesCount = _absences.length;
      _absences = _absences.slice(
            page * ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      );
      _absences = _absences.map((absence) => {
            return {
                  ...absence,
                  name: members.find((val) => val.userId === absence.userId)
                        ?.name,
                  status: !!absence.confirmedAt
                        ? ABSENCE_STATUS.CONFIRMED
                        : !!absence.rejectedAt
                        ? ABSENCE_STATUS.REJECTED
                        : ABSENCE_STATUS.REQUESTED,
                  startDate: format(parseISO(absence.startDate), "dd-MM-yyyy"),
                  endDate: format(parseISO(absence.endDate), "dd-MM-yyyy"),
                  duration:
                        differenceInDays(
                              new Date(absence.endDate),
                              new Date(absence.startDate)
                        ) + 1,
            };
      });

      setTimeout(() => {
            res.status(200).send({
                  page: Number(page),
                  totalAbsences: _absencesCount,
                  absences: _absences,
            });
      }, 3000);
});

router.get("/members", async (req, res) => {
      setTimeout(() => {
            res.status(200).send({
                  members,
            });
      }, 3000);
});

console.log("Running on port ", port);

app.listen(port);
