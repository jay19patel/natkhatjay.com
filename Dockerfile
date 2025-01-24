# Use an official Python image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app


# Install Python dependencies
RUN pip install flask gunicorn

# Copy the rest of the application code
COPY . .

# Expose the port on which the app will run
EXPOSE 8002

# Command to run the Flask app with Gunicorn
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8002", "app:app"]
