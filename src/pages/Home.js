import { Grid } from "@mui/material";
import React from "react";
import CardStyle from "../components/Card";

const data = [
  {
    title: "FriendScape",
    descriptions:
      "friendscape adalah aplikasi sosial media kencan online, pengguna dapat saling bertukar pesan, menambah dan memblokir pertemanan, mencari pasangan berdasarkan kriteria tertentu. ",
    stack: [
      { name: "react native", percentage: 40 },
      { name: "expo", percentage: 20 },
      { name: "firebase", percentage: 40 },
    ],
    sourceProject: [
      { title: "sourceCode", link: "" },
      { title: "playStore", link: "" },
    ],
  },
  {
    title: "Squad Study",
    descriptions:
      "Squad Study adalah aplikasi tryout UTBK, pengguna dapat mengatur sendiri waktu pengerjaan, melihat score tryout dan rekomendasi kampus pilihan, memfilter materi belajar berdasarkan kriteria",
    stack: [
      { name: "react native", percentage: 40 },
      { name: "firebase", percentage: 30 },
      { name: "expo", percentage: 30 },
    ],
    sourceProject: [
      { title: "sourceCode", link: "" },
      { title: "playStore", link: "" },
    ],
  },
  {
    title: "Saintis",
    descriptions:
      "Saintis adalah aplikasi belajar online untuk persiapan UTBK, aplikasi ini berisi kumpulan rangkuman materi UTBK yang dilengkapi dengan latihan soal ",
    stack: [
      { name: "react native", percentage: 80 },
      { name: "expo", percentage: 10 },
      { name: "redux", percentage: 10 },
    ],
    sourceProject: [
      { title: "sourceCode", link: "" },
      { title: "liveDemo", link: "" },
    ],
  },
  {
    title: "Hello World",
    descriptions:
      "Lizards are a widespread group of squamate reptiles, with over 6,00 species, ranging across all continents except Antarctica",
    stack: [
      { name: "react native", percentage: 80 },
      { name: "firebase", percentage: 10 },
      { name: "redux", percentage: 10 },
    ],
    sourceProject: [
      { title: "sourceCode", link: "" },
      { title: "playStore", link: "" },
    ],
  },
];

export default function Home() {
  return (
    <Grid container spacing={3} sx={{ mb: 5 }}>
      {data.map((dataItem, index) => (
        <Grid item xs={12} sm={6} xl={4} key={index}>
          <CardStyle data={dataItem} />
        </Grid>
      ))}
    </Grid>
  );
}
