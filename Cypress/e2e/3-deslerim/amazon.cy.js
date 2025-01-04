describe("Amazon Sayfasına Giriş", () => {
  
    it("Tarayıcıyı başlat ve Amazon sayfasını aç", () => {
      cy.visit("https://amazon.com.tr");
    });
  
    it("Çerezleri Kabul Et", () => {
      cy.xpath("//input[@id='sp-cc-accept']").then(($button) => {
        
      });
    });
  
    it("Arama kutusuna bir ürün yaz ve ara", () => {
      cy.get("#twotabsearchtextbox").type("Martin Eden");
      cy.get("#nav-search-submit-button").click();
    });
  
    it("İlk ürünü seç", () => {
        cy.get('.s-main-slot.s-result-list .s-result-item').first().click({ force: true });
        cy.wait(2000);
        cy.xpath("//input[@id='sp-cc-accept']").then(($button) => {
        cy.wait(2000);
          if ($button.is(':visible')) {
            cy.wrap($button).click();
          }
        });
      });
    it("Profilim sekmesine tıkla", () => {
        cy.get("#nav-link-accountList").click();
        
    });

    it("Bir hesap oluşturunuz", () => {
        cy.contains("Amazon hesabınızı oluşturun").click();
        //Belirtilen metni içeren bir HTML elementini seçer.
        cy.get(':nth-child(1) > :nth-child(2) > .a-form-label').should("contain","Ad - Soyad");
        cy.get('[for="ap_email"]').should("be.visible","E-posta");
});
  
});