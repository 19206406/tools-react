using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace ComboBoxCheckBox
{
    /// <summary>
    /// Lógica de interacción para MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

            List<Capitales> ListaCapitales = new List<Capitales>();

            ListaCapitales.Add(new Capitales { NombreCapital = "Bogota" });
            ListaCapitales.Add(new Capitales { NombreCapital = "Medellín" });
            ListaCapitales.Add(new Capitales { NombreCapital = "Manizales" });
            ListaCapitales.Add(new Capitales { NombreCapital = "Cali" });
            ListaCapitales.Add(new Capitales { NombreCapital = "Popayan" });

            // Realizar el binding con el combobox


            Capitales.ItemsSource = ListaCapitales;

        }
    }


    public class Capitales 
    {

        public string NombreCapital { get; set; }

    }

}
