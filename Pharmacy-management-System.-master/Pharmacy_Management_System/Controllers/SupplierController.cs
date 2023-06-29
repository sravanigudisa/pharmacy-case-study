using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Repository;
using Pharmacy_Management_System.Services;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Controllers
{
    [Authorize(Roles = "administrator")]
    [Route("api/[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        private readonly SupplierService _context;

        public SupplierController(SupplierService context)
        {
            _context = context;
        }

        // GET: api/Suppliers
        [HttpGet("ShowAllSuppliers")]
        public IActionResult ShowAllSupplier()
        {
            List<Supplier> suppliers;
            suppliers = _context.ShowAllSuppliers();
            return Ok(suppliers);
        }

        // GET: api/Suppliers/5
        [HttpGet("SearchSupplier/{id}")]
        public IActionResult GetSupplier(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.GetSupplier(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(item);
            }
        }

        //// PUT: api/Suppliers/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("EditSupplier/{id}")]
        public IActionResult PutSupplier(int id, Supplier supplier)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var item = _context.UpdateSupplier(id, supplier);
            return Ok("Updated Successfully");
        }
        //


        // POST: api/Suppliers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddSupplier")]
        public IActionResult PostSupplier(Supplier supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.AddSupplier(supplier);


            return Ok("Supplier Added Successfully");

        }

        // DELETE: api/Suppliers/5
        [HttpDelete("DeleteSupplier/{id}")]
        public IActionResult DeleteSupplier(int id)
        {
            var supplier = _context.GetSupplier(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.DeleteSupplier(id);


            return Ok("Supplier is Removed successfully");
        }
    }
}
