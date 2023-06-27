function solve(input) {
    for (let [busInfo, value] of Object.entries(input)) {
        if (busInfo === "schedule") {
            break;
        }
        console.log(`${busInfo}`);
        for (let [key2, value2] of Object.entries(value)) {
            console.log(`Bus Stop Number: ${key2}`);
            for (let [key3, value3] of Object.entries(value2)) {
                if (key3 === 'name') {
                    console.log('------------------------------adsas-----------');
                    let enitres = Object.entries(value2)
                    console.log(`${enitres[1]}`);
                }
                console.log('All buses');
                for (let [key4, value4] of Object.entries(value3)) {
                    console.log(`Key Word ${key4}, -----------${value4}`);
                }

            }
        }
    }

}
solve({
    "businfo": {
        "1287": {
            "buses": {
                "76": 15,
                "84": 10,
                "204": 10,
                "213": 18,
                "280": 9,
                "306": 31,
                "604": 11
            },
            "name": "Orlov Most sq."
        },
        "1308": {
            "buses": {
                "4": 13,
                "12": 6,
                "18": 7
            },
            "name": "St. Nedelya sq."
        },
        "1327": {
            "buses": {
                "78": 18,
                "85": 20,
                "213": 18,
                "285": 20,
                "305": 18,
                "404": 18,
                "413": 16
            },
            "name": "Central Train Station sq."
        },
        "2334": {
            "buses": {
                "20": 11,
                "22": 4
            },
            "name": "Centralni Hali"
        }
    },
    "schedule": {
        "1567": {
            "name": "Agriculture High School",
            "next": "0067"
        },
        "1844": {
            "name": "Boryana str.",
            "next": "2053"
        },
        "1931": {
            "name": "Dobrotitch str.",
            "next": "0296"
        },
        "2037": {
            "name": "Lyublyana str.",
            "next": "0098"
        },
        "2053": {
            "name": "Naroden Geroi str.",
            "next": "2037"
        },
        "2057": {
            "name": "Narodno Horo str.",
            "next": "0566"
        },
        "2571": {
            "name": "Zapaden Park No.38",
            "next": "2572"
        },
        "2572": {
            "name": "Subway Station Vardar",
            "next": "depot"
        },
        "0067": {
            "name": "New Bulgarian University",
            "next": "1844"
        },
        "0098": {
            "name": "National Rehabilitation Center",
            "next": "2057"
        },
        "0296": {
            "name": "Vardar blvd.",
            "next": "2571"
        },
        "0361": {
            "name": "Ovcha Kupel",
            "next": "0812"
        },
        "0566": {
            "name": "Balkancar Ltd.",
            "next": "0631"
        },
        "0631": {
            "name": "Krasna Polyana",
            "next": "1931"
        },
        "0812": {
            "name": "Buzema",
            "next": "1567"
        },
        "depot": {
            "name": "Depot",
            "next": "0361"
        }
    }
})