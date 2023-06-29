using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using Pharmacy_Management_System.Model;
using System.Collections.Generic;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Pharmacy_Management_System.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmailProcessController : ControllerBase
    {
        [HttpPost("EmailSendings")]
        public IActionResult EmailSending(List<Order> data_table)
        {
            double totalamount = 0;
            string textBody = "<p> Hello Doctor, </p> <p>Thank you for ordering from Pharmacy Management system.</p> <p>Once the order is approved by admin, we will process it</p>";
            textBody += " <table border=" + 1 + " cellpadding=" + 0 + " cellspacing=" + 0 + " width = " + 400 + "><tr bgcolor='#4da6ff'><td><b>Drug Name</b></td> <td> <b> Drug Quantity</b> </td> <td> <b> Unit Price</b> </td> <td> <b>Total Amount</b> </td></tr>";
            for (int loopCount = 0; loopCount < data_table.Count; loopCount++)
            {
                textBody += "<tr><td>" + data_table[loopCount].DrugsName + "</td><td> " + data_table[loopCount].DrugQuantity + "</td><td> " + data_table[loopCount].DrugPrice + "</td><td> " + Convert.ToInt32(data_table[loopCount].TotalAmount) + "</td> </tr>";
                totalamount += data_table[loopCount].TotalAmount;
            }
            textBody += "</table> <br>";
            textBody += "<strong>Order Date :</strong>";
            textBody += data_table[0].PickupDate.ToShortDateString();
            textBody += "<br><strong>Total Order Amount :</strong>";
            textBody += totalamount;
            textBody += "<br>";
            textBody += "<br><i>If you have any questions, contact us here on <b>gowthamipyla9@gmail.com</b>! " +
                "We are here to help you! </i>";


            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Gowthami Pyla", "gowthamipyla9@gmail.com"));
            message.To.Add(new MailboxAddress("doctor", data_table[0].DoctorId));
            message.Subject = "Order Placed - Pharmacy Management System";
            message.Body = new TextPart("html")
            {
                Text = textBody
            };
            using(var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("gowthamipyla9@gmail.com", "raymnsaelmnhqogs");
                client.Send(message);
                client.Disconnect(true);
            }

            return Ok("Email sent Successfully");
        }


        [HttpPost("AdminEmail/OrderConfirmation")]
        public IActionResult AdminEmailSending(Order data_table)
        {
            double totalamount = 0;
            string textBody = "<p> Hello Doctor, </p> <p>Thank you for ordering from Pharmacy Management system.</p> <p>We’re happy to let you know that we’ve received your order.</p> <p>Your order was approved by admin, and you will receive your order shortly.</p>";
            textBody += " <table border=" + 1 + " cellpadding=" + 0 + " cellspacing=" + 0 + " width = " + 400 + "><tr bgcolor='#4da6ff'><td><b>Drug Name</b></td> <td> <b> Drug Quantity</b> </td> <td> <b> Unit Price</b> </td> <td> <b>Total Amount</b> </td></tr>";
           
                textBody += "<tr><td>" + data_table.DrugsName + "</td><td> " + data_table.DrugQuantity + "</td><td> " + data_table.DrugPrice + "</td><td> " + Convert.ToInt32(data_table.TotalAmount) + "</td> </tr>";
                totalamount += data_table.TotalAmount;
            
            textBody += "</table> <br>";
            textBody += "<strong>Order Date :</strong>";
            textBody += data_table.PickupDate.ToShortDateString();
            textBody += "<br><strong>Total Order Amount :</strong>";
            textBody += totalamount;
            textBody += "<br><i>If you have any questions, contact us here on <b>gowthamipyla9@gmail.com</b>! " +
                "We are here to help you! </i>";


            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Gowthami Pyla", "gowthamipyla9@gmail.com"));
            message.To.Add(new MailboxAddress("doctor", data_table.DoctorId));
            message.Subject = "Order Confirmed - Pharmacy Management System";
            message.Body = new TextPart("html")
            {
                Text = textBody
            };
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("gowthamipyla9@gmail.com", "raymnsaelmnhqogs");
                client.Send(message);
                client.Disconnect(true);
            }

            return Ok("Email sent Successfully");
        }

        
    }
}
