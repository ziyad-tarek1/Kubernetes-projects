# Use the official Python 2.7 image as the base image
FROM python:2.7

# Set the working directory to /app
WORKDIR /app

# Copy the requirements.txt file into the container at /app
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application files into the container
COPY . /app

EXPOSE 5000
# Define the entry point to run the Python script
ENTRYPOINT ["python"]

# Define the default command to run the application
CMD ["app.py"]
