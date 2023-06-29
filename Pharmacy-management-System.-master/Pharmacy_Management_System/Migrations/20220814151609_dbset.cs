using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Pharmacy_Management_System.Migrations
{
    public partial class dbset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DoctorDetails",
                columns: table => new
                {
                    DoctorId = table.Column<string>(type: "varchar(25)", nullable: false),
                    DoctorName = table.Column<string>(type: "varchar(25)", nullable: false),
                    Contact = table.Column<string>(type: "varchar(25)", nullable: false),
                    Address = table.Column<string>(type: "varchar(50)", nullable: false),
                    EmailId = table.Column<string>(type: "varchar(35)", nullable: false),
                    Password = table.Column<string>(type: "varchar(225)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorDetails", x => x.DoctorId);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DoctorId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DrugId = table.Column<int>(type: "int", nullable: false),
                    DrugsName = table.Column<string>(type: "varchar(25)", nullable: false),
                    DrugPrice = table.Column<double>(type: "float", nullable: false),
                    DrugQuantity = table.Column<int>(type: "int", nullable: false),
                    PickupDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TotalAmount = table.Column<double>(type: "float", nullable: false),
                    IsPicked = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.OrderId);
                });

            migrationBuilder.CreateTable(
                name: "SupplierDetails",
                columns: table => new
                {
                    SupplierId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SupplierName = table.Column<string>(type: "varchar(25)", nullable: false),
                    EmailId = table.Column<string>(type: "varchar(35)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DrugAvailable = table.Column<string>(type: "varchar(25)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierDetails", x => x.SupplierId);
                });

            migrationBuilder.CreateTable(
                name: "DrugDetails",
                columns: table => new
                {
                    DrugId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DrugName = table.Column<string>(type: "varchar(25)", nullable: false),
                    DrugPrice = table.Column<double>(type: "float", nullable: false),
                    DrugQuantity = table.Column<int>(type: "int", nullable: false),
                    MfdDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExpDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    SupplierId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrugDetails", x => x.DrugId);
                    table.ForeignKey(
                        name: "FK_DrugDetails_SupplierDetails_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "SupplierDetails",
                        principalColumn: "SupplierId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DrugDetails_SupplierId",
                table: "DrugDetails",
                column: "SupplierId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorDetails");

            migrationBuilder.DropTable(
                name: "DrugDetails");

            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "SupplierDetails");
        }
    }
}
