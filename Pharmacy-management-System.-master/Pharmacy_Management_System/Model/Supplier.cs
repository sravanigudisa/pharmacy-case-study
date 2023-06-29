using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pharmacy_Management_System.Model
{
    public class Supplier
    {
        [Key]
        public int SupplierId { get; set;}


        [Column(TypeName = "varchar(25)")]
        [Required(ErrorMessage ="Name Should not bee Empty")]
        public string SupplierName { get; set;}


        [Required(ErrorMessage ="Please enter a valid email address")]
        [Column(TypeName = "varchar(35)")]
        [MinLength(8)]
        public string EmailId { get; set;}

        [Required(ErrorMessage = "PhoneNumber is required.")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "PhoneNumber Should be in between 0 and 9 and length should be 10")]
        public string PhoneNumber { get; set; }


        [Required]
        [Column(TypeName = "varchar(25)")]
        public string DrugAvailable { get; set;}
    }
}
