import moment from "moment";
import "moment/locale/sv";

import logo from "../assets/images/logo.png";
import img_eos from "../assets/images/clubs/eos.png";
import img_kal from "../assets/images/clubs/kal.png";
import img_aik2 from "../assets/images/clubs/aik2.jpeg";
import img_trb from "../assets/images/clubs/trb.png";
import img_norr from "../assets/images/clubs/norr.png";
import img_rig from "../assets/images/clubs/rig.jpeg";
import img_upp from "../assets/images/clubs/upp.jpeg";
import img_ock2 from "../assets/images/clubs/ock2.png";
import img_hog from "../assets/images/clubs/hög.png";
import img_hbg from "../assets/images/clubs/hbg.jpeg";
import img_wby from "../assets/images/clubs/wetterbyg.jpeg";

const t4q = {
  name: "Team4Q",
  venue: "GA-Hallen, HBG",
  img: logo,
};

const kal = {
  name: "Kalmar",
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
  img: img_aik2,
};

const trb = {
  name: "Trelleborg",
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
  img: img_ock2,
};

const wby = {
  name: "Wetterbygden",
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
    home_img: eos.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: eos.venue,
    time: "15:00",
    date: moment("2021-09-25").format("dddd, MMM Do"),
    result: "45-67",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: kal.name,
    away_img: kal.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-10-02").format("dddd, MMM Do"),
    result: "73-85",
  },
  {
    home: aik.name,
    home_img: aik.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: aik.venue,
    time: "15:00",
    date: moment("2021-10-10").format("dddd, MMM Do"),
    result: "76-95",
  },
  {
    home: kal.name,
    home_img: kal.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: aik.venue,
    time: "15:00",
    date: moment("2021-10-21").format("dddd, MMM Do"),
    result: "108-81",
  },
  {
    home: trb.name,
    home_img: trb.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: trb.venue,
    time: "15:00",
    date: moment("2021-10-30").format("dddd, MMM Do"),
    result: "118-99",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: norr.name,
    away_img: norr.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-11-07").format("dddd, MMM Do"),
    result: "75-85",
  },
  {
    home: upp.name,
    home_img: upp.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: upp.venue,
    time: "15:00",
    date: moment("2021-11-13").format("dddd, MMM Do"),
    result: "107-75",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: rig.name,
    away_img: rig.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-11-21").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: ock.name,
    home_img: ock.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: ock.venue,
    time: "16:00",
    date: moment("2021-12-04").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: hog.name,
    away_img: hog.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-12-11").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: wby.name,
    home_img: wby.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: wby.venue,
    time: "13:00",
    date: moment("2021-12-18").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: hbg.name,
    away_img: hbg.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-01-08").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: norr.name,
    home_img: norr.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: norr.venue,
    time: "16:00",
    date: moment("2021-01-15").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: wby.name,
    away_img: wby.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-01-22").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: rig.name,
    home_img: rig.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: rig.venue,
    time: "13:00",
    date: moment("2021-01-30").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: upp.name,
    away_img: upp.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-02-05").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: hbg.name,
    home_img: hbg.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: hbg.venue,
    time: "15:00",
    date: moment("2021-02-12").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: ock.name,
    away_img: ock.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-02-19").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: aik.name,
    away_img: aik.img,
    venue: t4q.venue,
    time: "13:30",
    date: moment("2021-02-27").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: hog.name,
    home_img: hog.img,
    away: t4q.name,
    away_img: t4q.img,
    venue: hog.venue,
    time: "15:30",
    date: moment("2021-03-05").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: eos.name,
    away_img: eos.img,
    venue: t4q.venue,
    time: "20:00",
    date: moment("2021-03-09").format("dddd, MMM Do"),
    result: "",
  },
  {
    home: t4q.name,
    home_img: t4q.img,
    away: trb.name,
    away_img: trb.img,
    venue: t4q.venue,
    time: "15:00",
    date: moment("2021-03-13").format("dddd, MMM Do"),
    result: "",
  },
];
