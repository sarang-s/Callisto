run:
	cd frontend && yarn parcel build index.html
	deno --allow-net --allow-read server.ts

	