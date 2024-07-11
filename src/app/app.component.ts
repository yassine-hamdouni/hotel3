import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'hotel';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScript('../assets/js/main.js');
      this.loadScript('assets/js/aos.js');
      this.loadScript('assets/js/bootstrap-datepicker.js');
      this.loadScript('assets/js/bootstrap.min.js');
      this.loadScript('assets/js/jquery-3.3.1.min.js');
      this.loadScript('assets/js/jquery-migrate-3.0.1.min.js');
      this.loadScript('assets/js/jquery.fancybox.min.js');
      this.loadScript('assets/js/jquery.magnific-popup.min.js');
      this.loadScript('assets/js/jquery.stellar.min.js');
      this.loadScript('assets/js/jquery.timepicker.min.js');
      this.loadScript('assets/js/jquery.validate.min.js');
      this.loadScript('assets/js/jquery.waypoints.min.js');
      this.loadScript('assets/js/owl.carousel.min.js');
      this.loadScript('assets/js/popper.min.js');
    }
  }

  private loadScript(url: string) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    script.onerror = () => {
      console.error('Script load error');
    };
    document.body.appendChild(script);
  }
}