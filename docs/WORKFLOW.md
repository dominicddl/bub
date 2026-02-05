# Start database (once)

docker-compose up -d

# Develop backend (fast iteration)

cd backend

bun dev

# View logs

bun dev  # logs appear directly

# Test

curl [http://localhost:3000/health/db](http://localhost:3000/health/db)

# Database access

docker exec -it bub-db psql -U bub -d bub_api