using Microsoft.EntityFrameworkCore;
using Pharmacy_Management_System.Model;

 
namespace Pharmacy_Management_System
{
    public class PharmacyContextDb : DbContext
    {
        public PharmacyContextDb():base()
        {
              
        }

        public  PharmacyContextDb(DbContextOptions<PharmacyContextDb> options):base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        public DbSet<Doctor> DoctorDetails { get; set; }
        public DbSet<Drug> DrugDetails { get; set; }
        public DbSet<Supplier> SupplierDetails { get; set; }
        public DbSet<Order> OrderDetails { get; set;}
       
    }
}
