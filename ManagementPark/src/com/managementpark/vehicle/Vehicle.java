package com.managementpark.vehicle;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.Valid;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;

import com.managementpark.Validators.IsValidNumber;




@Entity

public class Vehicle {

@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int ID_Vehicle;

@NotNull(message= "Poids may not be empty")
private Integer Weight_Vehicle;
@NotNull(message="error in field Nbr Places")
@IsValidNumber
private Integer NbSeats_Vehicle;
@NotEmpty(message="error in field Matricule")
private String RgNb_Vehicle;//Matricule


	

public int getID_Vehicle() {
	return ID_Vehicle;
}
public void setID_Vehicle(int iD_Vehicle) {
	ID_Vehicle = iD_Vehicle;
}

public Integer getWeight_Vehicle() {
	return Weight_Vehicle;
}
public void setWeight_Vehicle(Integer weight_Vehicle) {
	Weight_Vehicle = weight_Vehicle;
}
public Integer getNbSeats_Vehicle() {
	return NbSeats_Vehicle;
}
public void setNbSeats_Vehicle(Integer nbSeats_Vehicle) {
	NbSeats_Vehicle = nbSeats_Vehicle;
}


public String getRgNb_Vehicle() {
	return RgNb_Vehicle;
}
public void setRgNb_Vehicle(String rgNb_Vehicle) {
	RgNb_Vehicle = rgNb_Vehicle;
}






}
