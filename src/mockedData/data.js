export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]

export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]


export const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: "L",
                sessionLength: 30
            },
            {
                day: "M",
                sessionLength: 23
            },
            {
                day: "M",
                sessionLength: 45
            },
            {
                day: "J",
                sessionLength: 50
            },
            {
                day: "V",
                sessionLength: 0
            },
            {
                day: "S",
                sessionLength: 0
            },
            {
                day: "D",
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 'L',
                sessionLength: 30
            },
            {
                day: 'M',
                sessionLength: 40
            },
            {
                day: 'M',
                sessionLength: 50
            },
            {
                day: 'J',
                sessionLength: 30
            },
            {
                day: 'V',
                sessionLength: 30
            },
            {
                day: 'S',
                sessionLength: 50
            },
            {
                day: 'D',
                sessionLength: 50
            }
        ]
    }
]


export const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]


