/*** Let's say we have a legacy system that retrieves users' data in XML format, but we need to adapt it to a new system that only accepts data in JSON format. The following Adapter pattern handles this conversion. ***/

// xml2js is a popular package for converting XML to a JS object
const xml2js = require("xml2js");

// Legacy system
class OldSystem {
    getUser() {
        // This would come from some external system in the real world
        const userInXml = `
            <user>
                <id>1</id>
                <name>John Doe</name>
                <email>johndoe@example.com</email>
            </user>
        `;
        return userInXml;
    }
}

// New system class that expects user data in JSON format.
class NewSystem {
    // Method to get user information and print to console.
    getUser(userInJson) {
        console.log(`User Id: ${userInJson.id}`);
        console.log(`User Name: ${userInJson.name}`);
        console.log(`User Email: ${userInJson.email}`);
    }
}

// Adapter class to adapt XML data from the old system to JSON format for the new system.
class Adapter {
    // Constructor of Adapter class initializes an XML to JSON parser.
    constructor() {
        this.parser = new xml2js.Parser();
    }

    // Method to convert XML data to JSON format using the parser.
    async adapt(xmlData) {
        return new Promise((resolve, reject) => {
            this.parser.parseString(xmlData, (err, result) => {
                // If there's an error in parsing, it rejects the promise.
                if (err) {
                    reject(err);
                } else {
                    // Otherwise, it resolves the promise with the converted JSON data.
                    resolve(result.user);
                }
            });
        });
    }
}

// Here's how you would use the Adapter to make the old system and new system work together.
(async function main() {
    // Initialize instances of OldSystem, NewSystem and Adapter classes.
    const oldSystem = new OldSystem();
    const newSystem = new NewSystem();
    const adapter = new Adapter();

    // Get user data from old system in XML format.
    const userInXml = oldSystem.getUser();
    // Use the adapter to convert XML data to JSON format.
    const userInJson = await adapter.adapt(userInXml);

    // Provide the converted JSON data to the new system.
    newSystem.getUser(userInJson);
})();

// Using the adapter
(async function main() {
    const oldSystem = new OldSystem();
    const newSystem = new NewSystem();
    const adapter = new Adapter();

    const userInXml = oldSystem.getUser();
    const userInJson = await adapter.adapt(userInXml);

    newSystem.getUser(userInJson);
})();
