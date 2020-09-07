module.exports = function() {
    //var faker = require("faker");
    //var _ = require("lodash");

    return {
        courses: [
            {
                name: "Eagle Bend",
                key: "eaglebend",
                location: "Lawrence, KS",
                image: "/images/eagle-bend.jpg",
                tees: [
                    {
                        name: "Men's White",
                        key: "menswhite",
                        rating: 68.9,
                        slope: 119,
                        distance: 5989,
                        par: 72,
                        holes: [
                            {
                                number: 1,
                                distance: 370,
                                par: 4,
                                handicap: 5
                            },
                            {
                                number: 2,
                                distance: 325,
                                par: 4,
                                handicap: 16
                            },
                            {
                                number: 3,
                                distance: 499,
                                par: 5,
                                handicap: 6
                            },
                            {
                                number: 4,
                                distance: 120,
                                par: 3,
                                handicap: 18
                            },
                            {
                                number: 5,
                                distance: 320,
                                par: 4,
                                handicap: 12
                            },
                            {
                                number: 6,
                                distance: 379,
                                par: 4,
                                handicap: 2
                            },
                            {
                                number: 7,
                                distance: 483,
                                par: 5,
                                handicap: 8
                            },
                            {
                                number: 8,
                                distance: 127,
                                par: 3,
                                handicap: 14
                            },
                            {
                                number: 9,
                                distance: 390,
                                par: 4,
                                handicap: 4
                            },
                            {
                                number: 10,
                                distance: 360,
                                par: 4,
                                handicap: 10
                            },
                            {
                                number: 11,
                                distance: 344,
                                par: 4,
                                handicap: 15
                            },
                            {
                                number: 12,
                                distance: 105,
                                par: 3,
                                handicap: 17
                            },
                            {
                                number: 13,
                                distance: 500,
                                par: 5,
                                handicap: 11
                            },
                            {
                                number: 14,
                                distance: 335,
                                par: 4,
                                handicap: 3
                            },
                            {
                                number: 15,
                                distance: 300,
                                par: 4,
                                handicap: 13
                            },
                            {
                                number: 16,
                                distance: 409,
                                par: 4,
                                handicap: 1
                            },
                            {
                                number: 17,
                                distance: 153,
                                par: 3,
                                handicap: 9
                            },
                            {
                                number: 18,
                                distance: 470,
                                par: 5,
                                handicap: 7
                            },
                        ]
                    },
                    {
                        name: "Blue",
                        key: "blue",
                        rating: 70.9,
                        slope: 124,
                        distance: 6542,
                        par: 72,
                        holes: [
                            {
                                number: 1,
                                distance: 397,
                                par: 4,
                                handicap: 5
                            },
                            {
                                number: 2,
                                distance: 344,
                                par: 4,
                                handicap: 16
                            },
                            {
                                number: 3,
                                distance: 545,
                                par: 5,
                                handicap: 6
                            },
                            {
                                number: 4,
                                distance: 140,
                                par: 3,
                                handicap: 18
                            },
                            {
                                number: 5,
                                distance: 368,
                                par: 4,
                                handicap: 12
                            },
                            {
                                number: 6,
                                distance: 439,
                                par: 4,
                                handicap: 2
                            },
                            {
                                number: 7,
                                distance: 540,
                                par: 5,
                                handicap: 8
                            },
                            {
                                number: 8,
                                distance: 147,
                                par: 3,
                                handicap: 14
                            },
                            {
                                number: 9,
                                distance: 410,
                                par: 4,
                                handicap: 4
                            },
                            {
                                number: 10,
                                distance: 396,
                                par: 4,
                                handicap: 10
                            },
                            {
                                number: 11,
                                distance: 366,
                                par: 4,
                                handicap: 15
                            },
                            {
                                number: 12,
                                distance: 139,
                                par: 3,
                                handicap: 17
                            },
                            {
                                number: 13,
                                distance: 527,
                                par: 5,
                                handicap: 11
                            },
                            {
                                number: 14,
                                distance: 368,
                                par: 4,
                                handicap: 3
                            },
                            {
                                number: 15,
                                distance: 320,
                                par: 4,
                                handicap: 13
                            },
                            {
                                number: 16,
                                distance: 430,
                                par: 4,
                                handicap: 1
                            },
                            {
                                number: 17,
                                distance: 175,
                                par: 3,
                                handicap: 9
                            },
                            {
                                number: 18,
                                distance: 491,
                                par: 5,
                                handicap: 7
                            },
                        ]
                    }
                ]
            }
        ],
        scores: [
            {
                golfer: "test1",
                courseKey: "eaglebend",
                tee: "menswhite",
                holesPlayed: "18",
                date: 9/5/2020,
                totalScore: 93,
                holes: [
                    {
                        hole: 1,
                        strokes: 5,
                        putts: 2,
                        teeShot: "left",
                        penalties: ["LB"]
                    },
                    {
                        hole: 2,
                        strokes: 6,
                        putts: 3,
                        teeShot: "left",
                        penalties: ["OB"]
                    },
                    {
                        hole: 3,
                        strokes: 4,
                        putts: 2,
                        teeShot: "",
                        penalties: []
                    },
                    {
                        hole: 4,
                        strokes: 7,
                        putts: 3,
                        teeShot: "right",
                        penalties: []
                    },
                    {
                        hole: 5,
                        strokes: 5,
                        putts: 1,
                        teeShot: "long",
                        penalties: ["Drop"]
                    },
                    {
                        hole: 6,
                        strokes: 5,
                        putts: 2,
                        teeShot: "left",
                        penalties: []
                    },
                    {
                        hole: 7,
                        strokes: 6,
                        putts: 2,
                        teeShot: "left",
                        penalties: ["Water"]
                    },
                    {
                        hole: 8,
                        strokes: 6,
                        putts: 2,
                        teeShot: "right",
                        penalties: ["Drop", "LB"]
                    },
                    {
                        hole: 9,
                        strokes: 4,
                        putts: 1,
                        teeShot: "short",
                        penalties: []
                    },
                    {
                        hole: 10,
                        strokes: 5,
                        putts: 2,
                        teeShot: "left",
                        penalties: ["LB"]
                    },
                    {
                        hole: 11,
                        strokes: 3,
                        putts: 2,
                        teeShot: "",
                        penalties: ["OB"]
                    },
                    {
                        hole: 12,
                        strokes: 3,
                        putts: 2,
                        teeShot: "",
                        penalties: []
                    },
                    {
                        hole: 13,
                        strokes: 6,
                        putts: 3,
                        teeShot: "right",
                        penalties: []
                    },
                    {
                        hole: 14,
                        strokes: 4,
                        putts: 2,
                        teeShot: "",
                        penalties: ["Drop"]
                    },
                    {
                        hole: 15,
                        strokes: 4,
                        putts: 1,
                        teeShot: "left",
                        penalties: []
                    },
                    {
                        hole: 16,
                        strokes: 7,
                        putts: 2,
                        teeShot: "left",
                        penalties: ["Water"]
                    },
                    {
                        hole: 17,
                        strokes: 8,
                        putts: 3,
                        teeShot: "left",
                        penalties: ["OB"]
                    },
                    {
                        hole: 18,
                        strokes: 3,
                        putts: 1,
                        teeShot: "",
                        penalties: []
                    },
                ]
            }
        ]
    };
}