using Pharmacy_Management_System.Model;
using System;
using System.Linq;

namespace Pharmacy_Management_System.Repository
{
    public class AdminDAL : IAdminRepository
    {
        private readonly PharmacyContextDb _db;

        public AdminDAL(PharmacyContextDb db)
        {
            _db = db;
        }

        #region GetDocotor

        /// <summary>
        /// This method is used to get Existing Doctor by id
        /// </summary>
        /// <param name="doctorID"></param>
        /// <returns></returns>
        public Doctor GetDoctor(String doctorID)
        {
            var item = _db.DoctorDetails.FirstOrDefault(c => c.DoctorId == doctorID);
            return item;
        }

        #endregion
    }
}
