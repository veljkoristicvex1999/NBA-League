package com.example.demo.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.repository.IgracRepository;
import com.example.demo.repository.KorisnikRepository;
import com.example.demo.repository.TimRepository;
import com.example.demo.repository.UlogaRepository;
import com.example.demo.repository.UtakmicaRepository;
import com.example.demo.repository.VestiRepository;

import model.Igrac;
import model.Korisnik;
import model.Tim;
import model.Uloga;
import model.Utakmica;
import model.Vesti;
import classes.Response;
@Controller
@RequestMapping(value="/api")
public class Kontroler {
	@Autowired
	KorisnikRepository kr; 
	@Autowired
	UlogaRepository ul;
	@Autowired
	VestiRepository vr;
	@Autowired
	TimRepository tr;
	@Autowired
	IgracRepository ir;
	@Autowired
	UtakmicaRepository ur;
	
	@PostMapping(value = "login")
	public ResponseEntity<Response> login(@RequestParam(name = "email") String email,
			@RequestParam(name = "sifra") String sifra) {
		Response response = new Response();
		
		if (kr.findByEmail(email) != null) {
			if (kr.findByEmail(email).getSifra().equals(sifra)) {
				response.setEmail(email);
				response.setIdUloga(kr.findByEmail(email).getUloga().getIdUloga());
				response.setImeKorisnika(kr.findByEmail(email).getImeKorisnika());
				System.out.println(response.getEmail());
				System.out.println(response.getIdUloga());
				System.out.println(response.getImeKorisnika());
			}
		}
		return new ResponseEntity<Response>(response,HttpStatus.OK);

	}
	@PostMapping(value = "register")
	public ResponseEntity<Boolean> saveKorisnik(@RequestBody Korisnik korisnik) {
		if (korisnik.getEmail() != null && kr.findByEmail(korisnik.getEmail()) != null) {
			return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		}
		Korisnik k = new Korisnik();
		k.setIdKorisnik(korisnik.getIdKorisnik());
		k.setImeKorisnika(korisnik.getImeKorisnika());
		k.setEmail(korisnik.getEmail());
		k.setSifra(korisnik.getSifra());
		Uloga u =ul.findByImeUloge("Korisnik");
		k.setUloga(u);
		kr.save(k);
		System.out.println("111");
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);

	}
	@GetMapping(value = "getVesti")
	public ResponseEntity<List<Vesti>> getVesti() {
		System.out.println("Lista vesti");
		return new ResponseEntity<List<Vesti>>(vr.findAll(), HttpStatus.OK);
	}
	@GetMapping(value = "getTimovi")
	public ResponseEntity<List<Tim>> getTimovi() {
		System.out.println("Lista timova");
		return new ResponseEntity<List<Tim>>(tr.findAll(), HttpStatus.OK);
	}
	//Vraca sve igrace iz Unetog tima
	
	@GetMapping(value = "igraciTima")
	public ResponseEntity<List<Igrac>> igraciTima(@RequestParam(name = "imeTIma") String imeTIma) {
//		System.out.println("jedan");
//		System.out.println("caocoaocoao");
//		Tim tim = tr.findByimeTIma(imeTIma);
//		List<Igrac> novi = new ArrayList<Igrac>();
//		List<Igrac> igraci = ir.findAll();
//		for (Igrac i : igraci) {
//			if(i.getTim().equals(tim)) {
//				novi.add(i);
//			}
//		}
//		System.out.println("kraj");
//		return new ResponseEntity<List<Igrac>>(novi, HttpStatus.OK);
		List<Igrac> lista = ir.findAllPlayers(imeTIma);
		return new ResponseEntity<List<Igrac>>(lista, HttpStatus.OK);

	}
	@GetMapping(value = "sveUtakmice")
	public ResponseEntity<List<Utakmica>> sveUtakmice() {
		System.out.println("Sve Utakmice");
		return new ResponseEntity<List<Utakmica>>(ur.findAll(), HttpStatus.OK);
	}
	@PostMapping(value = "addVesti")
	public ResponseEntity<Vesti> addVesti(@RequestParam(name = "email") String email, @RequestParam(name = "slikaVest") String slikaVest,@RequestParam(name = "opis") String opis ) {
		System.out.println(email);
		Vesti vesti = new Vesti();
		Korisnik k = kr.findByEmail(email);
		vesti.setOpis(opis);
		vesti.setSlikaVest(slikaVest);
		vesti.setKorisnik(k);
		vr.save(vesti);
		return new ResponseEntity<Vesti>(vesti, HttpStatus.OK);
	}
	//pazi ovde parametre
	@PostMapping(value = "deleteVesti")
	public ResponseEntity<Boolean> deleteVesti(@RequestParam(name = "idVesti") String idVesti) {
		int vestId = Integer.parseInt(idVesti);
		Vesti vest = vr.findById(vestId).get();
		System.out.println(vest.getOpis());
		vr.delete(vest);
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
}
