// CloudSec Network Cloud Engineering Projects Data
// This file contains all your CloudSec project information
// You can easily update this file to add new weeks or modify existing content

export const cloudSecData = {
  weeks: [
    {
      id: 1,
      title: "Week 1 - AWS Account Setup",
      topic: "Getting Started with AWS",
      status: "completed",
      description: "Set up my AWS account and got familiar with the AWS Management Console.",
      projectDetails: {
        objectives: [
          "Create a new AWS account using my personal email",
          "Navigate the AWS Management Console",
          "Take screenshots to prove my account is active"
        ],
        keyLearnings: [
          "I learned how to create an AWS account from scratch",
          "I got familiar with the AWS Management Console interface",
          "I understand how to find my account ID and billing information"
        ],
        practicalWork: "I set up my AWS account and took screenshots of my Management Console showing my account ID and billing dashboard",
        tools: ["AWS Management Console", "AWS Billing Dashboard"],
        projectSteps: [
          "Step 1: Went to aws.amazon.com and clicked 'Create an AWS Account'",
          "Step 2: Entered my personal email address and chose a strong password",
          "Step 3: Provided my contact information and phone number for verification",
          "Step 4: Added a valid credit card for account verification (no charges for free tier)",
          "Step 5: Completed phone verification by entering the code I received",
          "Step 6: Selected the Basic Support plan (free)",
          "Step 7: Logged into the AWS Management Console for the first time",
          "Step 8: Explored the console interface and located my account ID",
          "Step 9: Checked the billing dashboard to confirm account is active",
          "Step 10: Took screenshots of the Management Console and billing dashboard as evidence"
        ],
        challenges: "The verification process took a few minutes, but everything went smoothly. I was excited to see all the AWS services available!",
        outcome: "Successfully created and verified my AWS account. Ready to start learning cloud security!"
      },
      screenshots: [
        {
          title: "AWS Management Console",
          url: "/assets/img/cloudsec/week1-aws-console.png",
          description: "Screenshot of my AWS Management Console showing account ID"
        },
        {
          title: "AWS Billing Dashboard",
          url: "/assets/img/cloudsec/week1-aws-billing-dashboard.png",
          description: "Screenshot of my billing dashboard proving active account"
        }
      ],
      notes: "This was my first step into AWS. Setting up the account was straightforward, and I'm excited to start learning cloud security."
    },
    {
      id: 2,
      title: "Week 2 - AWS Identity Center Setup",
      topic: "Identity and Access Management",
      status: "completed",
      description: "Configured AWS Identity Center and created users with proper permissions.",
      projectDetails: {
        objectives: [
          "Configure AWS Identity Center in my account",
          "Create a new user in Identity Center",
          "Assign SecurityAudit permission set to the user"
        ],
        keyLearnings: [
          "I learned how to set up AWS Identity Center from scratch",
          "I understand how to create users and manage their permissions",
          "I learned about predefined job function policies like SecurityAudit"
        ],
        practicalWork: "I configured Identity Center, created a new user, and assigned them the SecurityAudit job function policy",
        tools: ["AWS Identity Center", "Permission Sets", "SecurityAudit Policy"],
        projectSteps: [
          "Step 1: Navigated to AWS Identity Center in the AWS Management Console",
          "Step 2: Clicked 'Enable' to set up Identity Center for the first time",
          "Step 3: Chose to use Identity Center as my identity source",
          "Step 4: Waited for the Identity Center instance to be created",
          "Step 5: Accessed the Identity Center dashboard once setup was complete",
          "Step 6: Clicked 'Users' and then 'Add user' to create a new user",
          "Step 7: Entered user details including username, email, and display name",
          "Step 8: Set a temporary password for the new user",
          "Step 9: Navigated to 'Permission sets' and found the SecurityAudit predefined set",
          "Step 10: Assigned the SecurityAudit permission set to my newly created user",
          "Step 11: Took screenshots showing the Identity Center instance, user, and permission assignment"
        ],
        challenges: "Understanding the difference between permission sets and policies took some time, but the predefined SecurityAudit policy made it easier.",
        outcome: "Successfully configured Identity Center with a user who has read-only security access. This is much better than using root account!"
      },
      screenshots: [
        {
          title: "Identity Center Instance",
          url: "/assets/img/cloudsec/week2-identity-center.png",
          description: "Screenshot showing my Identity Center instance setup"
        },
        {
          title: "User and Permission Set",
          url: "/assets/img/cloudsec/week2-user-permissions.png",
          description: "Screenshot showing the created user and assigned SecurityAudit permission set"
        }
      ],
      notes: "Identity Center makes user management much easier. The SecurityAudit policy gives users read-only access to security-related resources."
    },
    {
      id: 3,
      title: "Week 3 - Windows EC2 Instance",
      topic: "EC2 and Remote Desktop Connection",
      status: "completed",
      description: "Launched a Windows Server EC2 instance and connected to it using Remote Desktop.",
      projectDetails: {
        objectives: [
          "Launch a Windows Server 2019 EC2 instance",
          "Configure security groups for RDP access",
          "Successfully connect via Remote Desktop"
        ],
        keyLearnings: [
          "I learned how to launch EC2 instances using specific AMIs",
          "I understand how to configure security groups to allow RDP access",
          "I learned how to connect to Windows instances using Remote Desktop"
        ],
        practicalWork: "I launched a Windows Server 2019 instance, configured security group for RDP access from my IP only, and successfully connected via Remote Desktop",
        tools: ["Amazon EC2", "Windows Server 2019 AMI", "Security Groups", "Remote Desktop"],
        projectSteps: [
          "Step 1: Navigated to EC2 service in the AWS Management Console",
          "Step 2: Clicked 'Launch Instance' to start the instance creation process",
          "Step 3: Selected 'Amazon Windows Server 2019 Base' AMI from the list",
          "Step 4: Chose an appropriate instance type (t2.micro for free tier)",
          "Step 5: Configured instance details and selected a public subnet",
          "Step 6: Added storage (kept default settings)",
          "Step 7: Added a Name tag with value 'CSN-Bootcamp-Week3'",
          "Step 8: Created a new security group for RDP access",
          "Step 9: Added inbound rule for RDP (port 3389) from my public IP only",
          "Step 10: Reviewed configuration and launched the instance",
          "Step 11: Created a new key pair for secure access",
          "Step 12: Waited for instance to reach 'running' state",
          "Step 13: Retrieved Windows password using my key pair",
          "Step 14: Used Remote Desktop Connection to connect to the instance",
          "Step 15: Successfully logged into the Windows Server desktop"
        ],
        challenges: "Finding my public IP address was tricky at first, but I used whatismyipaddress.com. Also had to wait a few minutes for the instance to fully boot up.",
        outcome: "Successfully launched and connected to my first Windows EC2 instance! The security group configuration worked perfectly - only I could access it."
      },
      screenshots: [
        {
          title: "Running Windows EC2 Instance",
          url: "/assets/img/cloudsec/week3-ec2-instance.png",
          description: "Screenshot showing my running Windows EC2 instance with Name tag CSN-Bootcamp-Week3"
        },
        {
          title: "Security Group RDP Rules",
          url: "/assets/img/cloudsec/week3-security-group.png",
          description: "Screenshot showing security group inbound rules allowing RDP from my public IP only"
        },
        {
          title: "Remote Desktop Connection",
          url: "/assets/img/cloudsec/week3-rdp-connection.png",
          description: "Screenshot showing successful Remote Desktop connection to the Windows instance"
        }
      ],
      notes: "This was my first time launching and connecting to a Windows server in the cloud. Security groups are crucial for controlling access."
    },
    {
      id: 4,
      title: "Week 4 - VPC Peering Connection",
      topic: "Multi-VPC Architecture",
      status: "completed",
      description: "Created two separate VPCs and established a peering connection between them.",
      projectDetails: {
        objectives: [
          "Create VPC-A with CIDR 10.10.0.0/16 and VPC-B with 10.20.0.0/16",
          "Create public and private subnets in each VPC",
          "Establish VPC peering connection between the two VPCs"
        ],
        keyLearnings: [
          "I learned how to create multiple VPCs with different CIDR blocks",
          "I understand how VPC peering allows communication between separate VPCs",
          "I learned how to update route tables to enable traffic flow through peering connections"
        ],
        practicalWork: "I created two VPCs with their respective subnets, established a peering connection, and updated route tables to allow inter-VPC communication",
        tools: ["Amazon VPC", "VPC Peering", "Route Tables", "Subnets"],
        projectSteps: [
          "Step 1: Navigated to VPC service in AWS Management Console",
          "Step 2: Created VPC-A with CIDR block 10.10.0.0/16",
          "Step 3: Created VPC-B with CIDR block 10.20.0.0/16",
          "Step 4: Created a public subnet in VPC-A (10.10.1.0/24)",
          "Step 5: Created a private subnet in VPC-A (10.10.2.0/24)",
          "Step 6: Created a public subnet in VPC-B (10.20.1.0/24)",
          "Step 7: Created a private subnet in VPC-B (10.20.2.0/24)",
          "Step 8: Initiated VPC peering connection from VPC-A to VPC-B",
          "Step 9: Accepted the peering connection request in VPC-B",
          "Step 10: Verified peering connection status shows 'Active'",
          "Step 11: Updated route table in VPC-A to route 10.20.0.0/16 traffic to peering connection",
          "Step 12: Updated route table in VPC-B to route 10.10.0.0/16 traffic to peering connection",
          "Step 13: Verified route tables show correct routes to peer VPC",
          "Step 14: Took screenshots of VPCs, subnets, peering connection, and route tables"
        ],
        challenges: "Understanding CIDR blocks and routing was challenging at first. I had to make sure the route tables in both VPCs pointed to each other correctly.",
        outcome: "Successfully created a multi-VPC architecture with working communication between VPCs. This taught me the basics of network design in AWS."
      },
      screenshots: [
        {
          title: "Two VPCs with CIDR Blocks",
          url: "/assets/img/cloudsec/week4-two-vpcs.png",
          description: "Screenshot showing VPC-A (10.10.0.0/16) and VPC-B (10.20.0.0/16)"
        },
        {
          title: "VPC Peering Connection",
          url: "/assets/img/cloudsec/week4-peering-connection.png",
          description: "Screenshot showing the VPC peering connection in Active status"
        },
        {
          title: "Route Tables Configuration",
          url: "/assets/img/cloudsec/week4-route-table.png",
          description: "Screenshot showing route tables with routes pointing to the other VPC through peering connection"
        }
      ],
      notes: "VPC peering is a great way to connect separate VPCs. Understanding CIDR blocks and routing is essential for network design."
    },
    {
      id: 5,
      title: "Week 5 - Grafana on ECS Fargate",
      topic: "Container Deployment and Monitoring",
      status: "completed",
      description: "Deployed Grafana using Amazon ECS with Fargate launch type.",
      projectDetails: {
        objectives: [
          "Deploy Grafana using ECS Fargate",
          "Use the official grafana/grafana Docker image",
          "Configure security groups to allow port 3000 access"
        ],
        keyLearnings: [
          "I learned how to deploy containers using ECS Fargate",
          "I understand how to create task definitions for containerized applications",
          "I learned how to configure security groups for container applications"
        ],
        practicalWork: "I created an ECS cluster, defined a task using grafana/grafana image, deployed it on Fargate, and accessed Grafana through the browser",
        tools: ["Amazon ECS", "AWS Fargate", "Docker", "Grafana"]
      },
      screenshots: [
        {
          title: "ECS Cluster and Service",
          url: "/assets/img/cloudsec/week5-ecs-cluster.png",
          description: "Screenshot showing my ECS cluster and running Grafana service"
        },
        {
          title: "Task Definition",
          url: "/assets/img/cloudsec/week5-task-definition.png",
          description: "Screenshot showing the task definition with grafana/grafana image"
        },
        {
          title: "Security Group Rules",
          url: "/assets/img/cloudsec/week5-security-group.png",
          description: "Screenshot showing security group allowing port 3000 access"
        },
        {
          title: "Grafana Login Page",
          url: "/assets/img/cloudsec/week5-grafana-login.png",
          description: "Screenshot of Grafana login page accessed via browser"
        }
      ],
      notes: "This was my first experience with containerized applications on AWS. Grafana's default credentials are admin/admin."
    },
    {
      id: 6,
      title: "Week 6 - Metabase with RDS PostgreSQL",
      topic: "Database Integration and Analytics",
      status: "completed",
      description: "Deployed Metabase on ECS Fargate and connected it to a PostgreSQL database on RDS.",
      projectDetails: {
        objectives: [
          "Deploy Metabase using ECS Fargate",
          "Create a PostgreSQL database on Amazon RDS",
          "Connect Metabase to the RDS database"
        ],
        keyLearnings: [
          "I learned how to deploy RDS PostgreSQL databases",
          "I understand how to configure database connectivity for containerized applications",
          "I learned about security group rules for database access"
        ],
        practicalWork: "I created an RDS PostgreSQL instance, deployed Metabase on ECS, configured security groups to allow communication between ECS and RDS, and successfully connected Metabase to the database",
        tools: ["Amazon ECS", "Amazon RDS", "PostgreSQL", "Metabase", "Docker"]
      },
      screenshots: [
        {
          title: "RDS PostgreSQL Instance",
          url: "/assets/img/cloudsec/week6-rds-instance.png",
          description: "Screenshot showing the RDS PostgreSQL instance details"
        },
        {
          title: "ECS Task Definition and Service",
          url: "/assets/img/cloudsec/week6-ecs-metabase.png",
          description: "Screenshot showing the ECS task definition and running Metabase service"
        },
        {
          title: "Security Group Rules",
          url: "/assets/img/cloudsec/week6-security-groups.png",
          description: "Screenshot showing security group rules allowing ECS to RDS communication on port 5432"
        },
        {
          title: "Metabase Database Connection",
          url: "/assets/img/cloudsec/week6-metabase-setup.png",
          description: "Screenshot of Metabase setup screen showing successful database connection"
        }
      ],
      notes: "This project taught me how to connect containerized applications to managed databases. Security groups are crucial for database security."
    },
    {
      id: 7,
      title: "Week 7 - ECS Monitoring with CloudWatch",
      topic: "Container Monitoring and Performance",
      status: "completed",
      description: "Deployed a containerized application on ECS Fargate and monitored it using CloudWatch dashboards.",
      projectDetails: {
        objectives: [
          "Deploy a containerized application (Nginx or Grafana) on ECS Fargate",
          "Configure appropriate CPU and memory settings",
          "Create CloudWatch dashboard to monitor CPU and memory utilization"
        ],
        keyLearnings: [
          "I learned how to configure CPU and memory settings for ECS tasks",
          "I understand how to create CloudWatch dashboards for monitoring containers",
          "I learned how to simulate load and observe metric changes in real-time"
        ],
        practicalWork: "I deployed a containerized application on ECS Fargate, created a CloudWatch dashboard with CPU and memory widgets, and simulated load to observe metric changes",
        tools: ["Amazon ECS", "AWS Fargate", "Amazon CloudWatch", "CloudWatch Dashboards"]
      },
      screenshots: [
        {
          title: "ECS Cluster and Running Service",
          url: "/assets/img/cloudsec/week7-ecs-cluster-service.png",
          description: "Screenshot showing my ECS cluster and running containerized service"
        },
        {
          title: "Task Definition with CPU and Memory Settings",
          url: "/assets/img/cloudsec/week7-task-definition-resources.png",
          description: "Screenshot showing the task definition with configured CPU and memory settings"
        },
        {
          title: "CloudWatch Dashboard with CPU and Memory Widgets",
          url: "/assets/img/cloudsec/week7-cloudwatch-dashboard.png",
          description: "Screenshot of CloudWatch dashboard showing CPU and memory utilization widgets"
        },
        {
          title: "Metrics Under Simulated Load (Optional)",
          url: "/assets/img/cloudsec/week7-load-testing-metrics.png",
          description: "Screenshot showing metric changes during simulated load testing"
        }
      ],
      notes: "This week taught me the importance of monitoring containerized applications. CloudWatch dashboards make it easy to track performance in real-time."
    },
    {
      id: 8,
      title: "Week 8 - Static Website with S3 and CloudFront",
      topic: "Static Website Hosting and CDN",
      status: "completed",
      description: "Deployed a personal static website using S3 and CloudFront for global content delivery.",
      projectDetails: {
        objectives: [
          "Create a personal static website (resume, portfolio, or About Me page)",
          "Upload HTML files to S3 and enable static website hosting",
          "Configure S3 bucket for public access with appropriate bucket policy",
          "Set up CloudFront distribution for secure content delivery"
        ],
        keyLearnings: [
          "I learned how to host static websites on Amazon S3",
          "I understand how to configure bucket policies for public website access",
          "I learned how CloudFront CDN improves website performance and security"
        ],
        practicalWork: "I created a personal static website, uploaded it to S3, configured static website hosting, set up a bucket policy for public access, and created a CloudFront distribution",
        tools: ["Amazon S3", "Amazon CloudFront", "S3 Static Website Hosting", "Bucket Policies"]
      },
      screenshots: [
        {
          title: "S3 Bucket Configuration with Static Website Hosting Enabled",
          url: "/assets/img/cloudsec/week8-s3-static-hosting.png",
          description: "Screenshot showing S3 bucket with static website hosting enabled"
        },
        {
          title: "S3 Bucket Policy for Public Access",
          url: "/assets/img/cloudsec/week8-s3-bucket-policy.png",
          description: "Screenshot showing the bucket policy that allows public access to website files"
        },
        {
          title: "CloudFront Distribution Settings",
          url: "/assets/img/cloudsec/week8-cloudfront-distribution.png",
          description: "Screenshot showing CloudFront distribution configuration and settings"
        },
        {
          title: "CloudFront Deployment Status",
          url: "/assets/img/cloudsec/week8-cloudfront-deployed.png",
          description: "Screenshot showing CloudFront distribution deployment status"
        },
        {
          title: "Live Website via CloudFront Domain",
          url: "/assets/img/cloudsec/week8-live-website.png",
          description: "Screenshot of my live website accessed through the CloudFront domain"
        }
      ],
      notes: "This project taught me how to host websites on AWS. CloudFront makes websites faster and more secure by caching content globally."
    },
    {
      id: 9,
      title: "Week 9 - Custom Domain with HTTPS",
      topic: "Domain Management and SSL Certificates",
      status: "completed",
      description: "Registered a domain, connected it to Route 53, and secured the website with SSL certificate.",
      projectDetails: {
        objectives: [
          "Register a domain and connect it to AWS Route 53",
          "Update nameservers to point to Route 53 hosted zone",
          "Request and validate SSL certificate using AWS Certificate Manager",
          "Configure CloudFront to use custom domain with HTTPS"
        ],
        keyLearnings: [
          "I learned how to manage domains using AWS Route 53",
          "I understand how to request and validate SSL certificates with ACM",
          "I learned how DNS validation works for SSL certificates",
          "I understand how to configure custom domains with CloudFront"
        ],
        practicalWork: "I registered a domain, set up Route 53 hosted zone, requested an SSL certificate through ACM with DNS validation, and configured CloudFront to serve my website over HTTPS with a custom domain",
        tools: ["Amazon Route 53", "AWS Certificate Manager (ACM)", "Amazon CloudFront", "DNS Management"]
      },
      screenshots: [
        {
          title: "Route 53 Hosted Zone Configuration",
          url: "/assets/img/cloudsec/week9-route53-hosted-zone.png",
          description: "Screenshot showing my Route 53 hosted zone with DNS records"
        },
        {
          title: "Validated SSL Certificate in AWS Certificate Manager",
          url: "/assets/img/cloudsec/week9-acm-ssl-certificate.png",
          description: "Screenshot showing the validated SSL certificate in ACM"
        },
        {
          title: "CloudFront Settings with Custom Domain",
          url: "/assets/img/cloudsec/week9-cloudfront-custom-domain.png",
          description: "Screenshot showing CloudFront distribution configured with custom domain and SSL certificate"
        },
        {
          title: "Website Loading Over HTTPS with Custom Domain",
          url: "/assets/img/cloudsec/week9-https-website.png",
          description: "Screenshot showing my website loading securely over HTTPS using the custom domain"
        }
      ],
      notes: "This week taught me about domain management and SSL certificates. Having HTTPS is essential for website security and user trust."
    },
    {
      id: 10,
      title: "Week 10 - S3 Event-Driven Lambda Function",
      topic: "Serverless Automation and Event Processing",
      status: "completed",
      description: "Created an S3 bucket that automatically triggers a Lambda function when files are uploaded.",
      projectDetails: {
        objectives: [
          "Create an S3 bucket with event triggers",
          "Build a Lambda function to respond to S3 upload events",
          "Configure the function to log file details or send notifications",
          "Test the automation by uploading files and verifying the response"
        ],
        keyLearnings: [
          "I learned how to create event-driven automation using S3 and Lambda",
          "I understand how S3 events can trigger serverless functions automatically",
          "I learned how to write Lambda functions that process S3 events",
          "I understand how to use CloudWatch Logs to monitor Lambda function execution"
        ],
        practicalWork: "I created an S3 bucket, wrote a Lambda function to process upload events, configured S3 to trigger the Lambda function on file uploads, and tested the automation by uploading files and checking the logs",
        tools: ["Amazon S3", "AWS Lambda", "Amazon CloudWatch Logs", "Amazon SES (optional)", "S3 Event Notifications"]
      },
      screenshots: [
        {
          title: "S3 Bucket with Event Trigger Configuration",
          url: "/assets/img/cloudsec/week10-s3-event-trigger.png",
          description: "Screenshot showing S3 bucket with event trigger connected to Lambda function"
        },
        {
          title: "Lambda Function Code and Settings",
          url: "/assets/img/cloudsec/week10-lambda-function-code.png",
          description: "Screenshot showing the Lambda function code that processes S3 upload events"
        },
        {
          title: "Lambda Function Configuration",
          url: "/assets/img/cloudsec/week10-lambda-function-settings.png",
          description: "Screenshot showing Lambda function configuration and permissions"
        },
        {
          title: "CloudWatch Logs Showing Function Execution",
          url: "/assets/img/cloudsec/week10-cloudwatch-logs.png",
          description: "Screenshot of CloudWatch Logs showing successful Lambda function execution after file upload"
        },
        {
          title: "SES Email Notification (if applicable)",
          url: "/assets/img/cloudsec/week10-ses-email-notification.png",
          description: "Screenshot of email notification received from SES confirming file upload (if SES was used)"
        }
      ],
      notes: "This final project brought together serverless computing and event-driven architecture. It's amazing how AWS services can work together automatically!"
    }
  ]
};

// Helper function to get current week status
export const getCurrentWeekStatus = () => {
  const currentWeek = 10; // COMPLETED! 🎉
  return {
    currentWeek,
    totalWeeks: 10,
    completedWeeks: 10, // All weeks completed!
    progressPercentage: 100 // 100% COMPLETE!
  };
};

// Helper function to add new weeks (for weeks 9-10)
export const addNewWeek = (weekData) => {
  cloudSecData.weeks.push(weekData);
};
