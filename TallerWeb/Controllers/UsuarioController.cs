using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TallerWeb.Controllers
{
    public class UsuarioController : Controller
    {
        //servidor/Usuario
        // Vista para ingresar a la aplicación
        public ActionResult Ingresar()
        {
            return View();
        }

        public ActionResult Menu()
        {
            return View();
        }

    }
}
