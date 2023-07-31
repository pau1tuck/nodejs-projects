cluster.fork(): This method is used to spawn new worker processes. Each worker runs in its own thread and is a separate instance of the main Node.js application. The cluster.fork() method is typically used in the master process to create one worker process for each CPU core.

cluster.isMaster: This property checks if the current process is the master process. If it is, this will return true. This is usually used in an if statement to separate the code that should run in the master process from the code that should run in the worker processes.

cluster.isWorker: Similar to cluster.isMaster, this property checks if the current process is a worker process. If it is, this will return true. This is typically used in an if statement to isolate the code that should run in the worker processes.

cluster.worker: This property contains all public information and methods about a worker. It's available only in the worker processes, and you can use it to control or get information about the individual worker.

cluster.on('exit', (worker, code, signal) => {}): This is an event method that the master process can listen for. It's triggered whenever a worker process is closed (either it exits itself, or it's killed). The worker parameter is a reference to the worker that died, code is the exit code if the worker exited itself, and signal is the name of the signal that killed the process if it was killed by a signal.

cluster.worker.kill(): This is a method that can be used to forcefully terminate a worker process.

cluster.worker.disconnect(): This method is used to disconnect a worker process. This allows all existing connections to be served before the worker is terminated.