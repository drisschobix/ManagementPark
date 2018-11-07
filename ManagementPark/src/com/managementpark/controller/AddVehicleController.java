package com.managementpark.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.managementpark.vehicle.Vehicle;


@Controller
public class AddVehicleController {
	
	@InitBinder
	public void BindObjectAttribute(WebDataBinder binder)
	{
		//SimpleDateFormat simpledateformat=new SimpleDateFormat("yyyy-MM-dd");
		//binder.registerCustomEditor(Date.class,"Date_Vehicle",new CustomDateEditor(simpledateformat,false));
	}
	
	@RequestMapping("/AddVehicle")
	public ModelAndView AddVehicle()
	{
		ModelAndView modelandview=new ModelAndView("AddVehicle");
		
		
		return modelandview;
		
	}
	
	@RequestMapping("/AddVehicleSubmition")
	public ModelAndView AddVehicleSubmition(@Valid @ModelAttribute("vehicle") Vehicle vehicle,BindingResult result)
	{
		
		if(result.hasErrors())
		{
			
			ModelAndView Modle1 =new ModelAndView("AddVehicle");
			
			return Modle1;
		}
		
	 SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();  
	  Session session = sessionFactory .openSession();
	  session.beginTransaction();
	  session.save(vehicle);
	  List<Vehicle> Vehicles  = (List<Vehicle>) session.createQuery("from Vehicle").list();
	  session.getTransaction().commit();
	  session.close();	
	  sessionFactory.close();
	
	  

	
	 
	  ModelAndView modelandview=new ModelAndView("Main");
	  modelandview.addObject("Vehicles", Vehicles);
		
	   return modelandview;
		
	}
	

	

}
