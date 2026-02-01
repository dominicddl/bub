import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 8000;

// middleware
// cors() enables Cross-Origin Resource Sharing (CORS) for the server
app.use(cors());
// express.json() parses incoming requests with JSON payloads
app.use(express.json());
// express.urlencoded() parses incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// health check route
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is running" });
});

// root route
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome to Bub API" });
});

// start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`⚡ Powered by Bun ${Bun.version}`);
});