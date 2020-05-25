let faker = require('faker')

function generateTRC() {
    let trc = []

    for (let id = 0; id < 2; id++) {
        // Define vars
        let domain = faker.address.country() // Define the domain
        let bands = [] // Define empty bands array
        let strand = [] // Define empty strands array
        let teachingActivities = [] // Define empty strands array

        // Set up dummy data objects for Teaching Activities
        for (let activity_id = 0; activity_id < 7; activity_id++) {
            let activity = {
                "id": activity_id,
                "slug": faker.address.state(),
                "title": faker.address.state(),
            };
            teachingActivities.push(activity); // Push strand objects to the strands array
        }

        // Set up dummy data objects for strands
        for (let strand_id = 0; strand_id < 4; strand_id++) {
            let strands = {
                "id": strand_id,
                "slug": faker.address.state(),
                "title": faker.address.state(),
                "combinedTitle": faker.address.stateAbbr(),
                "group": "",
                "description": faker.address.latitude(),
                "annotatedQuestions": "",
                "teachingActivities": teachingActivities
            };
            strand.push(strands); // Push strand objects to the strands array
        }

        // Set up dummy data objects for bands
        for (let i = 0; i < 10; i++) {
            let band = {
                "id": i,
                "slug": faker.address.country(),
                "title": faker.address.country(),
                "description": faker.address.latitude(),
                "strands": strand
            };
            bands.push(band); // Push band objects to the bands array
        }

        // Push the main objects
        trc.push({
            "id": id,
            "domain": domain,
            "bands": bands,
            "teachingActivities": teachingActivities
        })
    }

    return { "trc": trc }
}

module.exports = generateTRC
