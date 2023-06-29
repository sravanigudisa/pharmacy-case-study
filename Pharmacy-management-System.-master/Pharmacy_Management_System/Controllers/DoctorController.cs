using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pharmacy_Management_System;
using Pharmacy_Management_System.Model;
using Pharmacy_Management_System.Repository;
using Pharmacy_Management_System.Services;

namespace Pharmacy_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class DoctorController : ControllerBase
    {
         DoctorService _context;

       
        public DoctorController(DoctorService context)
        {
            _context = context;
        }

 
        [HttpPost("DoctorRegistration")]
        public IActionResult PostDoctor(Doctor doctor)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.AddDoctor(doctor);
            return Ok("true");

        }

      
    }
}
