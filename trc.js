var faker = require('faker')

function generateTrc() {
    var trc = []

    for (var id = 0; id < 2; id++) {
        var domain = faker.address.country();
        var bands = [faker.random.objectElement()];

        trc.push({
            "id": id,
            "domain": domain,
            "bands": bands
        })
    }
    return { "trc": trc }
}

module.exports = generateTrc
