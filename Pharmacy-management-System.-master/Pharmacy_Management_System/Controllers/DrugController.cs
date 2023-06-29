using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Repository;
using Pharmacy_Management_System.Services;
using System.Collections.Generic;

namespace Pharmacy_Management_System.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DrugController : ControllerBase
    {
        private readonly DrugService _context;

        public DrugController(DrugService context)
        {
            _context = context;
        }

        // GET: api/Drugs
        [HttpGet("GetAllDrugs")]
        public IActionResult GetDrugDetails()
        {
            List<Drug> drugs;
            drugs = _context.GetAllDrugs();
            return Ok(drugs);
        }

        // GET: api/Drugs/5
        [HttpGet("SearchDrug/{id}")]
        public IActionResult GetDrugs(int id)
        {
            var item = _context.GetDrugById(id);
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

        // PUT: api/Drugs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("EditDrug/{id}")]
        public IActionResult PutDrugs(int id, Drug drugs)
        {
            if (id != drugs.DrugId)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _context.UpdateDrug(id, drugs);
            return Ok("Updated Successfully");
        }

        // POST: api/Drugs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddDrug")]
        public IActionResult PostDrugs(Drug drugs)
        {

            _context.AddDrug(drugs);
            return Ok("New Drug is Been Added");
        }

        // DELETE: api/Drugs/5
        [HttpDelete("DeleteDrug/{id}")]
        public IActionResult DeleteDrugs(int id)
        {
            var supplier = _context.GetDrugById(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.DeleteDrug(id);


            return Ok("Drug is Removed successfully");
        }

    }
}
