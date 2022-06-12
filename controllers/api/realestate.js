const router = require('express').Router();
const withAuth = require('../../utils/auth');
const fetch = require('node-fetch');
const url = 'https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&CurrentPage=1&RecordsPerPage=10&SortOrder=A&SortBy=1&CultureId=1&NumberOfDays=0&BedRange=0-0&BathRange=0-0&RentMin=0';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'realty-in-ca1.p.rapidapi.com',
    'X-RapidAPI-Key': '6f5f17331cmshc434ece2ea4ac7ap1b6b51jsn2db748cde5ea'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err))
    console.log(data)