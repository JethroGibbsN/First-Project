const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );


// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, '../build')));

// An api endpoint that returns a short list of items
app.get('/api/getHomeContent', (req,res) => {
    var home = {
        title1: "Leroy Jethro Gibbs",
        content1: "Leroy Jethro Gibbs (AKA Gunnery Sergeant Alvin Thomas or Leland Robert Spears) is a former Gunnery Sergeant in the United States Marine Corps who is now an NCIS Special Agent assigned to the Navy Yard in Washington D.C. and who is also the current leader of the main NCIS Major Case Response Team.",
        title2: "Anthony DiNozzo Junior",
        content2:"Anthony (Tony) D. DiNozzo Jr., (or (Junior) by his father, Anthony DiNozzo Senior or Very Special Agent Anthony DiNozzo) was the Senior Field Agent on the NCIS Major Case Response Team led by Leroy Jethro Gibbs with Tony also serving as the second-in-command of the team.",
        title3: "Timothy McGee",
        content3: "Timothy (Tim) Farragut McGee is an NCIS Special Agent and also the current Senior Field Agent assigned to the main NCIS Major Case Response Team in the Navy Yard Washington D.C. with the team under the command of Special Agent Leroy Jethro Gibbs.",
        title4:"Ziva David",
        content4:"Ziva David (surname primarily pronounced dah-VEED) was a former Israeli Mossad officer and former NCIS Special Agent who was originally assigned to NCIS as a Liaison Officer for Mossad, beginning her tenure as a NCIS/Mossad Liaison Officer in September/October 2005 following the murder of her predecessor, NCIS Special Agent Caitlin Todd at the hands of Ziva's half-brother, Ari Haswari.",
        title5:"Eleanor Bishop",
        content5:"Eleanor Raye (Ellie) Bishop is a former analyst for the NSA and who is now a Special Agent with NCIS.With her mission being preemptive terror analysis where she had to predict and also pinpoint who the up and coming threats were, Bishop became the first person to officially recognize terrorist Benham Parsa as a potential threat. She then devoted six years of her NSA career to hunting Parsa with Bishop's determination to find Parsa slowly becoming an obsession.",
        title6:"Nicholas Torres",
        content6:"Nicholas (Nick) Torres is an NCIS Special Agent who is also a member of the main NCIS Major Case Response Team led by NCIS Special Agent Leroy Jethro Gibbs.",
        title7:"Abigail Sciuto",
        content7:"Abigail (Abby) Sciuto is the former Chief Forensic Scientist for the NCIS Major Case Response Team."
    };
    res.json(home);
    console.log('Sent home content');
});

app.get('/api/getAboutContent', (req,res) =>{
    var about={
        title: 'About Page',
        content1: 'This is about NCIS.',
        content2:'NCIS is an American action police procedural television series, revolving around a fictional team of special agents from the Naval Criminal Investigative Service. The concept and characters were initially introduced in two episodes of the CBS series JAG (season eight episodes 20 and 21: "Ice Queen" and "Meltdown"). The show, a spin-off from JAG, premiered on September 23, 2003, on CBS. To date it has aired sixteen full seasons and has gone into broadcast syndication on the USA Network. Donald P. Bellisario and Don McGill are co-creators and executive producers of the premiere member of the NCIS franchise. As of 2019, it is the second-longest-running scripted, non-animated U.S. primetime TV series currently airing, surpassed only by Law & Order: Special Victims Unit (1999–present), and is the 7th-longest-running scripted U.S. primetime TV series overall.'
    };
    res.json(about);
    console.log('Sent about content')
});

app.get('/api/getContactContent', (req,res) =>{
    var contact={
        title: 'Contact Us',
        content1: 'Phone : 9502847928',
        content2:'Email : boyapatikrishna99@gmail.com',
        content3: "Naval Criminal Investigative Service 27130 Telegraph Road Quantico, VA 22134"
    };
    res.json(contact);
    console.log('Sent contact content')
});

app.get('/api/getDashboardContent', (req,res) =>{
    var data = {
        labels: ['Gibbs', 'Tony', 'Ziva', 'McGee', 'Bishop', 'Torres', 'Abby'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ] ,
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [95, 90, 83, 81, 79, 78, 77,80]
          }
        ]
      };
    res.json(data);
    console.log('Sent Dashboard content')
});
app.use(bodyParser.json());

app.post('/api/signin', (req, res) => {
    var Users = [
        {
            email: 'abc@example.com',
            password: 'abc'
        },
        {
            email:'xyz@example.com',
            password:'xyz'
        }
    ];
    var userFound= false;
    console.log(Users);
    if(!req.body.email || !req.body.password){
        res.status(400)
        res.json({message: "Please enter both email and password"});
    }    
    else {
       Users.forEach((user) => {
          if(user.email === req.body.email && user.password === req.body.password){
            userFound=true;
            res.status(200);
            res.json({message: "Logged in successfully "});
          }
       });
       if(userFound === false)
            {res.status(401)
            res.json({message: "Invalid credentials!"});
            }
       
    }
    console.log('Sent Signin content')
 });
 
app.get('*', (req,res) =>{
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);