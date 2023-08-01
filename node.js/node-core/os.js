const os = require("os");

os.arch(); // Get the CPU architecture.

os.cpus(); // Get information about each CPU core.

os.totalmem(); // Get the total amount of system memory in bytes.

os.freemem(); // Get the amount of free system memory in bytes.

os.hostname(); // Get the hostname of the operating system.

os.platform(); // Get the operating system platform.

os.release(); // Get the release version of the operating system.

os.type(); // Get the operating system type (e.g., "Linux" or "Windows").

os.uptime(); // Get the system uptime in seconds.

os.networkInterfaces(); // Get information about network interfaces.

os.userInfo(); // Get information about the current user.

JSON.stringify(os.EOL); // Get the end-of-line character(s) for the current operating system.
