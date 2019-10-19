import React from 'react';
import '../Home/Home.scss';

class Person extends React.Component{
    state = {
        person : [
            {
              "_id": "5daae791a71ee38b342bad9e",
              "age": 20,
              "name": "Cherry Lee",
              "email": "cherrylee@enthaze.com",
              "phone": "+1 (948) 475-3114",
              "address": "674 Guernsey Street, Mahtowa, Ohio, 927"
            },
            {
              "_id": "5daae79160ad0b689781ef26",
              "age": 33,
              "name": "Rosanna Clay",
              "email": "rosannaclay@enthaze.com",
              "phone": "+1 (994) 514-3358",
              "address": "335 Vandervoort Place, Vernon, California, 5306"
            },
            {
              "_id": "5daae791990cca687830f03d",
              "age": 31,
              "name": "Fran Carlson",
              "email": "francarlson@enthaze.com",
              "phone": "+1 (954) 406-2694",
              "address": "400 Madoc Avenue, Dellview, Washington, 7212"
            },
            {
              "_id": "5daae791943acd0d9edfffe9",
              "age": 29,
              "name": "Vargas Jenkins",
              "email": "vargasjenkins@enthaze.com",
              "phone": "+1 (971) 594-3339",
              "address": "494 Schroeders Avenue, Grahamtown, Missouri, 2384"
            },
            {
              "_id": "5daae791cb4a7904cf384279",
              "age": 22,
              "name": "Matthews Nunez",
              "email": "matthewsnunez@enthaze.com",
              "phone": "+1 (858) 592-2359",
              "address": "509 Brooklyn Avenue, Crucible, Wisconsin, 3781"
            },
            {
                "_id": "5daaec01770a110b29390c2d",
                "age": 21,
                "name": "Newman Little",
                "email": "newmanlittle@lyrichord.com",
                "phone": "+1 (839) 548-3529",
                "address": "375 Schenectady Avenue, Loomis, California, 7547"
              },
              {
                "_id": "5daaec0140004deac006cfdc",
                "age": 36,
                "name": "Nell Gill",
                "email": "nellgill@lyrichord.com",
                "phone": "+1 (839) 579-2453",
                "address": "583 Tudor Terrace, Bend, North Carolina, 7121"
              },
              {
                "_id": "5daaec014b40a15378c5fea0",
                "age": 21,
                "name": "Bowers Mcintyre",
                "email": "bowersmcinty@lyrichord.com",
                "phone": "+1 (864) 484-3378",
                "address": "479 Rose Street, Iberia, New Jersey, 3383"
              },
          ]
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign : "center"}}>Person List</h1>
                {this.state.person.map((i)=>{
                    return(
                        <div className="list" key={i._id }>
                            <p><b>Name: </b>{i.name}</p>
                            <p><b>age: </b>{i.age}</p>
                            <p><b>email: </b>{i.email}</p>
                            <p><b>Phone: </b>{i.phone}</p>
                            <p><b>Address: </b>{i.address}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Person;