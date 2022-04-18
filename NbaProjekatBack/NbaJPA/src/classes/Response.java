package classes;

public class Response {
	
	private String email;
	private String imeKorisnika;
	private int idUloga;
	public int getIdUloga() {
		return idUloga;
	}

	public void setIdUloga(int idUloga) {
		this.idUloga = idUloga;
	}

	public Response() {
		this.email="";
		this.imeKorisnika="";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email=email;
	}
	

	public String getImeKorisnika() {
		return imeKorisnika;
	}

	public void setImeKorisnika(String imeKorisnika) {
		this.imeKorisnika = imeKorisnika;
	}


	@Override
	public String toString() {
		return  "email=" + email;
	}
	
	
	
	

}
