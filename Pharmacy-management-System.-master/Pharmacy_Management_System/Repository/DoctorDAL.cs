using System.Linq;
using System;
using Pharmacy_Management_System.Model;

namespace Pharmacy_Management_System.Repository
{
    public class DoctorDAL : IDoctorRepository
    {
        private readonly PharmacyContextDb _db;
      
        public DoctorDAL(PharmacyContextDb db)
        {
            _db = db;
        }


        #region AddDoctor

        /// <summary>
        /// This method is used to add doctor
        /// </summary>
        /// <param name="doctor"></param>
        public void AddDoctor(Doctor doctor)
        {
            _db.DoctorDetails.Add(doctor);
            _db.SaveChanges();
            
        }

        #endregion

    }
}
