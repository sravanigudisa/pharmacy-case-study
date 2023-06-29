using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Services;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;


namespace Pharmacy_Management_System.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _context;

        public OrderController(OrderService context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet("GetAllOrders")]
        public IActionResult GetOrdersDetails()
        {
            List<Order> orders;
            orders = _context.GetAllOrders();
            return Ok(orders);
        }


        // GET: api/Orders/5
        [HttpGet("SearchOrder/{id}")]
        public IActionResult GetOrders(int id)
        {
            var item = _context.GetOrderById(id);
            if (!ModelState.IsValid)
            {
                return BadRequest(item);
            }

            if (item == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(item);
            }
        }


        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("EditOrder/{id}")]
        public IActionResult PutOrders(int id, Order orders)
        {
            if (id != orders.OrderId)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _context.UpdateOrder(id, orders);
            return Ok("Updated Successfully");
        }


        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddOrder")]
        public IActionResult PostOrders(Order orders)
        {

            _context.AddOrder(orders);
            return Ok(orders);
        }


       


        // DELETE: api/Orders/5
        [HttpDelete("DeleteOrder/{id}")]
        public IActionResult DeleteOrders(int id)
        {
            var supplier = _context.GetOrderById(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.DeleteOrder(id);


            return Ok("Order is Removed successfully");
        }


    }
}
