const url = "http://localhost:3000/sample.json";

const getData = async (url: string) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		};
		return await response.json();
	} catch (error) {
		throw new Error(`Error: ${error}`)
	} finally {
		console.log("Finished retrieving data.");
	}
}