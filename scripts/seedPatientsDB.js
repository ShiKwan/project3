const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Database name = 'medmonitordb'
// This file empties the respective collections and inserts the seed data below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/medmonitordb",
  {
    useMongoClient: true
  }
);



const patient_dataSeed = [
    {
      date_created: new Date("2018-04-07T00:00:00.000Z"),
      active: true,
      physician: "5ac7ae215a77e145a4d86147",      //doctor: to be populated with _id from doctors collection
      
      details: {
        patient_number: "hosp00",
        first_name:  "Cary",
        last_name: "Grant",
        dob: "03/12/1959",
        email: "cary@microsoft.com",
        phone: "123-534-5673"
      },
  
        appointment: {
          next_appt: new Date("2018-04-12T10:00:00.000Z"),
          comments: "Look forward to seeying Ya"
      },
  
        episode: [{
            episode_id: "001",
            start_date: new Date("2018-03-24T08:00:00.000Z"),
            physician: "Dr John Heyworth",
    
            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }, 
            {
                medication: "Apokyn(apomorphine)",
                dose: "10mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1200", "1600", "2000"]
            }],
  
            record: [
                {
                    date_time: new Date("2018-03-24T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 0, sleepy: 1, offtime: 0, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking:1, balance: 1},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-24T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 3, balance:3},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 2, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-03-25T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 2, movement: 1, sleepy: 2, offtime: 0, tremor: 1, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 3, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-25T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 3, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                 },
            //
                {
                    date_time: new Date("2018-03-26T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 1, walking: 0, balance: 0},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: true,},
                    symptoms: {kickin:1, wearoff: 2, movement: 1, sleepy: 0, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-26T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
            //
                {
                    date_time: new Date("2018-03-27T08:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T12:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 1, sleepy: 1, offtime: 0, tremor: 1, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T16:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-27T20:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 2, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 2, balance: 2},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }
            ] // end of record array

        },
        
        // new episode

        {
            episode_id: "001",
            start_date: new Date("2018-03-28T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1400", "1800", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1800", "1800", "2000"]
            },
            {
                medication: "Cogentin (benztropine)",
                dose: "1mg",
                form: "tablet",
                route: "oral",
                times: ["1000", "1800"]
            }
                
        ],

            record: [
                {
                    date_time: new Date("2018-03-28T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 3, balance:3},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-03-28T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking:1, balance: 1},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 0, sleepy: 1, offtime: 0, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-28T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-29T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 3, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-03-29T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 3, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 3, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-03-29T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-29T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 2, movement: 1, sleepy: 2, offtime: 0, tremor: 1, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-29T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },

            //    
                {
                    date_time: new Date("2018-03-30T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: true,},
                    symptoms: {kickin:1, wearoff: 2, movement: 1, sleepy: 0, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 1, walking: 0, balance: 0},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-30T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-03-31T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 2, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 2, balance: 2},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-03-31T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 1, sleepy: 1, offtime: 0, tremor: 1, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-03-31T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }

            ] // end of record array

        }, 

        // new episode  

        {
            episode_id: "001",
            start_date: new Date("2018-04-01T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1400", "1800", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1800", "1800", "2000"]
            },
            {
                medication: "Cogentin (benztropine)",
                dose: "1mg",
                form: "tablet",
                route: "oral",
                times: ["1000", "1800"]
            }
                
        ],

            record: [
                {
                    date_time: new Date("2018-04-01T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 3, balance:3},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-15T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking:1, balance: 1},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 0, sleepy: 1, offtime: 0, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-01T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-02T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 3, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-02T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 3, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 3, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-04-02T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-02T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 2, movement: 1, sleepy: 2, offtime: 0, tremor: 1, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-02T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },

            //    
                {
                    date_time: new Date("2018-04-03T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: true,},
                    symptoms: {kickin:1, wearoff: 2, movement: 1, sleepy: 0, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 1, walking: 0, balance: 0},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-03T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-04T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 2, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 2, balance: 2},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-04-04T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-04T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 1, sleepy: 1, offtime: 0, tremor: 1, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-04T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-04T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }

            ] // end of record array

        },

        //new episode

        {
                episode_id: "001",
                start_date: new Date("2018-04-05T08:00:00.000Z"),
                physician: "Dr John Heyworth",
        
                medications: [{
                    medication: "Sinemet (carbidopa/levodopa)",
                    dose: "10mg/100mg",
                    form: "tablet",
                    route: "oral",
                    times: ["0800", "1200", "1600", "2000"]
                }, 
                {
                    medication: "Apokyn(apomorphine)",
                    dose: "10mg",
                    form: "tablet",
                    route: "oral",
                    times: ["0800", "1200", "1600", "2000"]
                }],
      
                record: [
                    {
                        date_time: new Date("2018-04-05T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 1, movement: 0, sleepy: 1, offtime: 0, tremor: 2, walking: 1, balance: 0},
                        side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking:1, balance: 1},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                        side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-05T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 3, balance:3},
                        side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 2, }, notes: "",
                    },
                //
                    {
                        date_time: new Date("2018-04-06T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 2, movement: 1, sleepy: 2, offtime: 0, tremor: 1, walking: 1, balance: 1},
                        side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 4, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                        side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                        symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 3, offtime: 3, tremor: 4, walking: 4, balance: 3},
                        side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-06T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 3, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                        side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                     },
                //
                    {
                        date_time: new Date("2018-04-07T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 1, walking: 0, balance: 0},
                        side_effects: {sickness: 1, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: true,},
                        symptoms: {kickin:1, wearoff: 2, movement: 1, sleepy: 0, offtime: 1, tremor: 2, walking: 1, balance: 1},
                        side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                        side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-07T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                        side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                    },
                //
                    {
                        date_time: new Date("2018-04-08T08:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 1},
                        side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T12:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 1, wearoff: 1, movement: 1, sleepy: 1, offtime: 0, tremor: 1, walking: 1, balance: 0},
                        side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 2, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T16:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                        side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                    },
                    {
                        date_time: new Date("2018-04-08T20:00:00.000Z"),
                        meds_taken: true,
                        emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                        symptoms: {kickin: 2, wearoff: 2, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 2, balance: 2},
                        side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                    }

                ] // end of record array

        },

        //new episode

        {
            episode_id: "001",
            start_date: new Date("2018-04-09T06:00:00.000Z"),
            physician: "Dr John Heyworth",

            medications: [{
                medication: "Sinemet (carbidopa/levodopa)",
                dose: "10mg/100mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1400", "1800", "2000"]
            }, 
            {
                medication: "Apokyn (apomorphine)",
                dose: "10mg",
                form: "tablet",
                route: "oral",
                times: ["0600", "1000", "1800", "1800", "2000"]
            },
            {
                medication: "Cogentin (benztropine)",
                dose: "1mg",
                form: "tablet",
                route: "oral",
                times: ["1000", "1800"]
            }
                
        ],

            record: [
                {
                    date_time: new Date("2018-04-09T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 3, balance:3},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-09T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-09T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking:1, balance: 1},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-09T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 0, sleepy: 1, offtime: 0, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-09T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 3, balance: 3},
                    side_effects: {sickness: 0, dizziness: 2, headaches: 1, drymouth: 2, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-10T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 3, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 0, headaches: 1, drymouth: 2, }, notes: "",
                },                
                {
                    date_time: new Date("2018-04-10T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 3, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 3, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-04-10T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-10T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 2, movement: 1, sleepy: 2, offtime: 0, tremor: 1, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-10T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: true, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 0, wearoff: 1, movement: 1, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },

            //    
                {
                    date_time: new Date("2018-04-11T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 3, walking: 2, balance: 2},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: true,},
                    symptoms: {kickin:1, wearoff: 2, movement: 1, sleepy: 0, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 1, walking: 0, balance: 0},
                    side_effects: {sickness: 1, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-11T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 0, dizziness: 1, headaches: 0, drymouth: 3, }, notes: "",
                },

            //
                {
                    date_time: new Date("2018-04-12T06:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 2, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 2, balance: 2},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }, 
                {
                    date_time: new Date("2018-04-12T10:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T14:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 1, sleepy: 1, offtime: 0, tremor: 1, walking: 1, balance: 0},
                    side_effects: {sickness: 1, dizziness: 0, headaches: 0, drymouth: 2, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T18:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: true, choking: false, hallucination: false,},
                    symptoms: {kickin: 1, wearoff: 1, movement: 0, sleepy: 1, offtime: 1, tremor: 2, walking: 1, balance: 1},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 3, }, notes: "",
                },
                {
                    date_time: new Date("2018-04-12T22:00:00.000Z"),
                    meds_taken: true,
                    emergencies: {falls: false, freezing: false, choking: false, hallucination: false,},
                    symptoms: {kickin: 2, wearoff: 4, movement: 3, sleepy: 4, offtime: 3, tremor: 4, walking: 4, balance: 3},
                    side_effects: {sickness: 1, dizziness: 2, headaches: 1, drymouth: 4, }, notes: "",
                }

            ] // end of record array

        }] // end last episode
    
    }]; // end of patient 



  db.Patient_data
  .remove({})
  .then(() => db.Patient_data.collection.insertMany(patient_dataSeed))
     .then(data => {
      console.log(data.insertedIds.length + " patient_data records inserted!");

  })  
  .catch(err => {
    console.error(err);
    process.exit(1);
  });