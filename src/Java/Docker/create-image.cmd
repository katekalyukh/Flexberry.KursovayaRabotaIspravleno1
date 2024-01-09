docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovayarabotaispravleno1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovayarabotaispravleno1-java/app ../../..
