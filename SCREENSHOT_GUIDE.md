# CloudSec Portfolio Screenshot Guide

This guide shows you exactly which screenshot files to replace with your actual images. All files are located in `src/assets/img/cloudsec/`

## 📁 Week 1 - AWS Account Setup
**Replace these files with your screenshots:**

### `week1-aws-console.png`
**What to screenshot:** Your AWS Management Console homepage
**Requirements:** Should clearly show your account ID
**Description:** Screenshot of my AWS Management Console showing account ID

### `week1-billing-dashboard.png`
**What to screenshot:** Your AWS billing dashboard
**Requirements:** Should show that your account is active
**Description:** Screenshot of my billing dashboard proving active account

---

## 📁 Week 2 - AWS Identity Center Setup
**Replace these files with your screenshots:**

### `week2-identity-center.png`
**What to screenshot:** Your Identity Center instance setup
**Requirements:** Should show the Identity Center instance is configured
**Description:** Screenshot showing my Identity Center instance setup

### `week2-user-permissions.png`
**What to screenshot:** The user you created with SecurityAudit permissions
**Requirements:** Should show the created user and assigned SecurityAudit permission set
**Description:** Screenshot showing the created user and assigned SecurityAudit permission set

---

## 📁 Week 3 - Windows EC2 Instance
**Replace these files with your screenshots:**

### `week3-ec2-instance.png`
**What to screenshot:** Your running Windows EC2 instance in AWS Console
**Requirements:** Should show Name tag "CSN-Bootcamp-Week3" and running status
**Description:** Screenshot showing my running Windows EC2 instance with Name tag CSN-Bootcamp-Week3

### `week3-security-group.png`
**What to screenshot:** Security group inbound rules
**Requirements:** Should show RDP (port 3389) allowed only from your public IP
**Description:** Screenshot showing security group inbound rules allowing RDP from my public IP only

### `week3-rdp-connection.png`
**What to screenshot:** Remote Desktop connection to your Windows instance
**Requirements:** Should show successful connection to the Windows desktop
**Description:** Screenshot showing successful Remote Desktop connection to the Windows instance

---

## 📁 Week 4 - VPC Peering Connection
**Replace these files with your screenshots:**

### `week4-two-vpcs.png`
**What to screenshot:** Both VPCs in your AWS Console
**Requirements:** Should show VPC-A (10.10.0.0/16) and VPC-B (10.20.0.0/16)
**Description:** Screenshot showing VPC-A (10.10.0.0/16) and VPC-B (10.20.0.0/16)

### `week4-peering-connection.png`
**What to screenshot:** VPC peering connection status
**Requirements:** Should show the peering connection in "Active" status
**Description:** Screenshot showing the VPC peering connection in Active status

### `week4-route-tables.png`
**What to screenshot:** Route tables configuration
**Requirements:** Should show routes pointing to the other VPC through peering connection
**Description:** Screenshot showing route tables with routes pointing to the other VPC through peering connection

---

## 📁 Week 5 - Grafana on ECS Fargate
**Replace these files with your screenshots:**

### `week5-ecs-cluster.png`
**What to screenshot:** Your ECS cluster and running Grafana service
**Requirements:** Should show cluster and service status
**Description:** Screenshot showing my ECS cluster and running Grafana service

### `week5-task-definition.png`
**What to screenshot:** Task definition with grafana/grafana image
**Requirements:** Should show the task definition configuration
**Description:** Screenshot showing the task definition with grafana/grafana image

### `week5-security-group.png`
**What to screenshot:** Security group allowing port 3000
**Requirements:** Should show inbound rule for port 3000
**Description:** Screenshot showing security group allowing port 3000 access

### `week5-grafana-login.png`
**What to screenshot:** Grafana login page in your browser
**Requirements:** Should show Grafana interface accessible via browser
**Description:** Screenshot of Grafana login page accessed via browser

---

## 📁 Week 6 - Metabase with RDS PostgreSQL
**Replace these files with your screenshots:**

### `week6-rds-instance.png`
**What to screenshot:** Your RDS PostgreSQL instance details
**Requirements:** Should show the database instance information
**Description:** Screenshot showing the RDS PostgreSQL instance details

### `week6-ecs-metabase.png`
**What to screenshot:** ECS task definition and running Metabase service
**Requirements:** Should show Metabase running on ECS
**Description:** Screenshot showing the ECS task definition and running Metabase service

### `week6-security-groups.png`
**What to screenshot:** Security group rules for ECS to RDS communication
**Requirements:** Should show port 5432 allowed from ECS to RDS
**Description:** Screenshot showing security group rules allowing ECS to RDS communication on port 5432

### `week6-metabase-setup.png`
**What to screenshot:** Metabase setup screen with database connection
**Requirements:** Should show successful database connection in Metabase
**Description:** Screenshot of Metabase setup screen showing successful database connection

---

## 📁 Week 7 - ECS Monitoring with CloudWatch
**Replace these files with your screenshots:**

### `week7-ecs-cluster-service.png`
**What to screenshot:** Your ECS cluster and running containerized service
**Requirements:** Should show the service running with resource allocation
**Description:** Screenshot showing my ECS cluster and running containerized service

### `week7-task-definition-resources.png`
**What to screenshot:** Task definition showing CPU and memory settings
**Requirements:** Should clearly show the configured CPU and memory values
**Description:** Screenshot showing the task definition with configured CPU and memory settings

### `week7-cloudwatch-dashboard.png`
**What to screenshot:** CloudWatch dashboard with CPU and memory widgets
**Requirements:** Should show monitoring widgets for your ECS task
**Description:** Screenshot of CloudWatch dashboard showing CPU and memory utilization widgets

### `week7-load-testing-metrics.png` (Optional)
**What to screenshot:** Metrics during simulated load testing
**Requirements:** Should show metric changes when you stress-tested the application
**Description:** Screenshot showing metric changes during simulated load testing

---

## 📁 Week 8 - Static Website with S3 and CloudFront
**Replace these files with your screenshots:**

### `week8-s3-static-hosting.png`
**What to screenshot:** S3 bucket with static website hosting enabled
**Requirements:** Should show static website hosting configuration
**Description:** Screenshot showing S3 bucket with static website hosting enabled

### `week8-s3-bucket-policy.png`
**What to screenshot:** The bucket policy for public access
**Requirements:** Should show the JSON policy that allows public read access
**Description:** Screenshot showing the bucket policy that allows public access to website files

### `week8-cloudfront-distribution.png`
**What to screenshot:** CloudFront distribution configuration
**Requirements:** Should show distribution settings and origin configuration
**Description:** Screenshot showing CloudFront distribution configuration and settings

### `week8-cloudfront-deployed.png`
**What to screenshot:** CloudFront distribution deployment status
**Requirements:** Should show "Deployed" status
**Description:** Screenshot showing CloudFront distribution deployment status

### `week8-live-website.png`
**What to screenshot:** Your website accessed via CloudFront domain
**Requirements:** Should show your website loading in browser with CloudFront URL
**Description:** Screenshot of my live website accessed through the CloudFront domain

---

## 📁 Week 9 - Custom Domain with HTTPS
**Replace these files with your screenshots:**

### `week9-route53-hosted-zone.png`
**What to screenshot:** Route 53 hosted zone with DNS records
**Requirements:** Should show your domain's hosted zone configuration
**Description:** Screenshot showing my Route 53 hosted zone with DNS records

### `week9-acm-ssl-certificate.png`
**What to screenshot:** Validated SSL certificate in AWS Certificate Manager
**Requirements:** Should show certificate status as "Issued"
**Description:** Screenshot showing the validated SSL certificate in ACM

### `week9-cloudfront-custom-domain.png`
**What to screenshot:** CloudFront configured with custom domain and SSL
**Requirements:** Should show custom domain and SSL certificate attached
**Description:** Screenshot showing CloudFront distribution configured with custom domain and SSL certificate

### `week9-https-website.png`
**What to screenshot:** Your website loading over HTTPS with custom domain
**Requirements:** Should show HTTPS lock icon and your custom domain in browser
**Description:** Screenshot showing my website loading securely over HTTPS using the custom domain

---

## 📁 Week 10 - S3 Event-Driven Lambda Function
**Replace these files with your screenshots:**

### `week10-s3-event-trigger.png`
**What to screenshot:** S3 bucket event trigger configuration
**Requirements:** Should show S3 bucket with Lambda function trigger configured
**Description:** Screenshot showing S3 bucket with event trigger connected to Lambda function

### `week10-lambda-function-code.png`
**What to screenshot:** Your Lambda function code
**Requirements:** Should show the code that processes S3 upload events
**Description:** Screenshot showing the Lambda function code that processes S3 upload events

### `week10-lambda-function-settings.png`
**What to screenshot:** Lambda function configuration and permissions
**Requirements:** Should show function settings, runtime, and permissions
**Description:** Screenshot showing Lambda function configuration and permissions

### `week10-cloudwatch-logs.png`
**What to screenshot:** CloudWatch Logs showing function execution
**Requirements:** Should show logs proving the Lambda function executed after file upload
**Description:** Screenshot of CloudWatch Logs showing successful Lambda function execution after file upload

### `week10-ses-email-notification.png` (Optional)
**What to screenshot:** Email notification from SES (if you used SES)
**Requirements:** Should show email received confirming file upload
**Description:** Screenshot of email notification received from SES confirming file upload (if SES was used)

---

## 🎯 Quick Tips:
1. **File names are case-sensitive** - make sure to match exactly
2. **Use PNG format** for best quality
3. **Keep file sizes reasonable** (under 2MB each)
4. **Crop screenshots** to show relevant parts clearly
5. **Ensure text is readable** in your screenshots

## 🚀 After Adding Screenshots:
1. Run `npm start` to test your portfolio
2. Click on each week to verify screenshots display correctly
3. Check that all images load properly
4. Your portfolio will be ready for deployment!
