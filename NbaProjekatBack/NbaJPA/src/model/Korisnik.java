package model;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;


/**
 * The persistent class for the korisnik database table.
 * 
 */
@Entity
@NamedQuery(name="Korisnik.findAll", query="SELECT k FROM Korisnik k")
public class Korisnik implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private int idKorisnik;

	private String email;

	private String imeKorisnika;

	private String sifra;

	//bi-directional many-to-one association to Uloga
	@ManyToOne
	@JsonIgnore
	private Uloga uloga;

	//bi-directional many-to-one association to Utakmica
	@OneToMany(mappedBy="korisnik")
	@JsonIgnore
	private List<Utakmica> utakmicas;

	//bi-directional many-to-one association to Vesti
	@OneToMany(mappedBy="korisnik")
	@JsonIgnore
	private List<Vesti> vestis;

	public Korisnik() {
	}

	public int getIdKorisnik() {
		return this.idKorisnik;
	}

	public void setIdKorisnik(int idKorisnik) {
		this.idKorisnik = idKorisnik;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImeKorisnika() {
		return this.imeKorisnika;
	}

	public void setImeKorisnika(String imeKorisnika) {
		this.imeKorisnika = imeKorisnika;
	}

	public String getSifra() {
		return this.sifra;
	}

	public void setSifra(String sifra) {
		this.sifra = sifra;
	}

	public Uloga getUloga() {
		return this.uloga;
	}

	public void setUloga(Uloga uloga) {
		this.uloga = uloga;
	}

	public List<Utakmica> getUtakmicas() {
		return this.utakmicas;
	}

	public void setUtakmicas(List<Utakmica> utakmicas) {
		this.utakmicas = utakmicas;
	}

	public Utakmica addUtakmica(Utakmica utakmica) {
		getUtakmicas().add(utakmica);
		utakmica.setKorisnik(this);

		return utakmica;
	}

	public Utakmica removeUtakmica(Utakmica utakmica) {
		getUtakmicas().remove(utakmica);
		utakmica.setKorisnik(null);

		return utakmica;
	}

	public List<Vesti> getVestis() {
		return this.vestis;
	}

	public void setVestis(List<Vesti> vestis) {
		this.vestis = vestis;
	}

	public Vesti addVesti(Vesti vesti) {
		getVestis().add(vesti);
		vesti.setKorisnik(this);

		return vesti;
	}

	public Vesti removeVesti(Vesti vesti) {
		getVestis().remove(vesti);
		vesti.setKorisnik(null);

		return vesti;
	}

}