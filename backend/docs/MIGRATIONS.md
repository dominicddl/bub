# Run your migration
cd backend
docker exec -i bub-db psql -U bub -d bub_api < src/database/migrations/001_create_users_table.sql

# Verify it worked
docker exec -it bub-db psql -U bub -d bub_api -c "\d users"

# If you need to start over (drops table!)
docker exec -it bub-db psql -U bub -d bub_api -c "DROP TABLE IF EXISTS users CASCADE;"