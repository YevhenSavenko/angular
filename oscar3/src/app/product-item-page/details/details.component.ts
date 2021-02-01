import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  specifications = [
    {key: 'Voice Assistant Built-inInfo', value: 'Google Assistant'},
    {key: 'Screen SizeInfo', value: '64.5 inches'},
    {key: 'Display Type', value: 'OLED'},
    {key: 'Smart PlatformInfo', value: 'LG AI ThinQ'},
    {key: 'High Dynamic Range (HDR)Info', value: 'Yes'},
    {key: 'Number of HDMI Inputs', value: '4'},
    {key: 'Vertical ResolutionInfo', value: '2160p (4K)'},
    {key: 'Specific Manufacturer Technologies', value: '4K Cinema HDR'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
