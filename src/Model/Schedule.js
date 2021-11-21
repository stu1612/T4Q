import moment from "moment";
import "moment/locale/sv";

import logo from "../assets/images/logo.png";
import img_eos from "../assets/images/clubs/eos.png";
import img_kal from "../assets/images/clubs/kal.png";
import img_aik from "../assets/images/clubs/aik.png";
import img_trb from "../assets/images/clubs/trb.png";
import img_norr from "../assets/images/clubs/norr.png";
import img_rig from "../assets/images/clubs/rig.jpeg";
import img_upp from "../assets/images/clubs/upp.jpeg";
import img_ock from "../assets/images/clubs/ock.png";
import img_hog from "../assets/images/clubs/hög.png";
import img_hbg from "../assets/images/clubs/hbg.jpeg";
import img_wby from "../assets/images/clubs/wetterbyg.jpeg";

const t4q = {
  name: "T4Q",
  venue: "GA-Hallen, HBG",
  img: logo,
};

const kal = {
  name: "Kalmar Saints",
  venue: "Akea Arena",
  img: img_kal,
};

const eos = {
  name: "IK EOS",
  venue: "Eoshallen A, Lund",
  img: img_eos,
};

const aik = {
  name: "AIK Basket",
  venue: "Vasalundshallen",
  img: img_aik,
};

const trb = {
  name: "Trelleborg Pirate",
  venue: "Våstervångshallen, Trelleborg",
  img: img_trb,
};

const norr = {
  name: "Norrort",
  venue: "Fribergahallen",
  img: img_norr,
};

const rig = {
  name: "RIG Mark",
  venue: "Kinnerhallen",
  img: img_rig,
};

const upp = {
  name: "Uppsala Basket",
  venue: "Upplands Bilforum UIF Arena",
  img: img_upp,
};

const ock = {
  name: "Ockelbo",
  venue: "Kuxahallen",
  img: img_ock,
};

const wby = {
  name: "Wetterbygden Stars",
  venue: "Huskvarnen Sporthall",
  img: img_wby,
};

const hbg = {
  name: "Helsingborg BBK",
  venue: "GA-Hallen, HBG",
  img: img_hbg,
};

const hog = {
  name: "Högsbo Basket",
  venue: "Gothia Arena 2",
  img: img_hog,
};

// moment.locale("se");

export const Schedule = [
  {
    home: eos.name,
    away: t4q.name,
    venue: eos.venue,
    time: "15:00",
    date: moment("2021-09-25").format("dddd, MMM Do"),
    result: "45-67",
  },
  {
    home: t4q.name,
    away: kal.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-10-02").format("dddd, MMM Do"),
    result: "73-85",
  },
  {
    home: aik.name,
    away: t4q.name,
    venue: aik.venue,
    time: "15:00",
    date: moment("2021-10-10").format("dddd, MMM Do"),
    result: "76-95",
  },
  {
    home: kal.name,
    away: t4q.name,
    venue: aik.venue,
    time: "15:00",
    date: moment("2021-10-21").format("dddd, MMM Do"),
    result: "108-81",
  },
  {
    home: trb.name,
    away: t4q.name,
    venue: trb.venue,
    time: "15:00",
    date: moment("2021-10-30").format("dddd, MMM Do"),
    result: "118-99",
  },
  {
    home: t4q.name,
    away: norr.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-11-07").format("dddd, MMM Do"),
    result: "75-85",
  },
  {
    home: upp.name,
    away: t4q.name,
    venue: upp.venue,
    time: "15:00",
    date: moment("2021-11-13").format("dddd, MMM Do"),
    result: "107-75",
  },
  {
    home: t4q.name,
    away: rig.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-11-21").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: ock.name,
    away: t4q.name,
    venue: ock.venue,
    time: "16:00",
    date: moment("2021-12-04").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: hog.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-12-11").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: wby.name,
    away: t4q.name,
    venue: wby.venue,
    time: "13:00",
    date: moment("2021-12-18").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: hbg.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-01-08").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: norr.name,
    away: t4q.name,
    venue: norr.venue,
    time: "16:00",
    date: moment("2021-01-15").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: wby.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-01-22").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: rig.name,
    away: t4q.name,
    venue: rig.venue,
    time: "13:00",
    date: moment("2021-01-30").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: upp.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-02-05").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: hbg.name,
    away: t4q.name,
    venue: hbg.venue,
    time: "15:00",
    date: moment("2021-02-12").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: ock.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-02-19").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: aik.name,
    venue: t4q.venue,
    time: "13:30",
    date: moment("2021-02-27").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: hog.name,
    away: t4q.name,
    venue: hog.venue,
    time: "15:30",
    date: moment("2021-03-05").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: eos.name,
    venue: t4q.venue,
    time: "20:00",
    date: moment("2021-03-09").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    away: trb.name,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-03-13").format("dddd, MMM Do"),
    result: "",
  },
];
