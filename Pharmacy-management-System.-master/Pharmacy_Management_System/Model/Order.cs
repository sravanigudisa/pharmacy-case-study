using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pharmacy_Management_System.Model
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }


        [ForeignKey("Doctor")]
        [Required]
        public string DoctorId { get; set; }

        
        [ForeignKey("Drug")]
        [Required]
        public int DrugId { get; set; }


        [Column(TypeName = "varchar(25)")]
        [Required]
        public string DrugsName { get; set; }


        [Required(ErrorMessage = "Price cannot be empty")]
        public double DrugPrice { get; set; }


        [Required(ErrorMessage = "Quantity should be greater than or equal to 1")]
        public int DrugQuantity { get; set; }


        [Required(ErrorMessage ="Check the date Entered")]
        public DateTime PickupDate { get; set; }

        public double TotalAmount { get; set; }

        public string IsPicked { get; set; }
    }

    
}
