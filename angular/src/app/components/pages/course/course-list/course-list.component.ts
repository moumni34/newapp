import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/shared/service/routes/routes';
import {EventService} from "../../../../services/events.services";
import {HttpClient} from "@angular/common/http";
import {Event} from "../../../../models/events.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public routes = routes;
  selected ='1';
  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;

  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  public courseList: any = [];
  public latestCourses: any = [];

  constructor(private data: DataService,private eventService: EventService, private http: HttpClient) {
    // this.courseList = this.data.courseList;
    this.latestCourses = this.data.latestCourses;
  }


  selectedEvent: Event | undefined;
  myCourse: any;
  events: any;
  listEvents : any;
  form : boolean = false;
 // constructor(private eventService: EventService, private http: HttpClient) { }
  /* form = new FormGroup({
     editorContent: new FormControl('', Validators.required()),
   });*/
  Event!: Event;
  ngOnInit(): void {
    // this.editor = new Editor();

    this.addEvent(this.events);;
    this.getAllEvents();
    this.Event = {
      idEvents: '',
      Name: '',
      Topic: '',
      location: '',
      Image: '',
      StartDate: '',
      EndDate: '',
      Places: '',
      Themes: '',
      //Ratiing: '',
      nbrParticipant: '',
      MaxNbrParticipant: ''
    };


  }
  /* loadEvents(): void {
     const authToken = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWF6dXNlciIsImlhdCI6MTY4MjcyOTM3NCwiZXhwIjoxNjgyNzQ3Mzc0fQ.K3fHUkqQGUNCCKA4TJFdEYOsp9ueQ7nJ5TGK8DAO_gE');
     const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
     this.eventService.getAllEvents(headers).subscribe(
       (events: Event[]) => {
         this.events = events;
       },
       (error: any) => {
         console.log(error);
       }
     );
   }
 */

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }



  /*
  createEvent(events: any): void {
    const authToken = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZWF6dXNlciIsImlhdCI6MTY4MzAyOTQ1OSwiZXhwIjoxNjgzMDQ3NDU5fQ.tbJZmvsbKmm6AiHtvnHBvFQBALz6JshBrh-GDwrgiz8');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    this.http.post<Event>('http://localhost:8097/Post', event, { headers }).subscribe(
      (createdEvent: Event) => {
        this.events.push(createdEvent);
      },
      (error: any) => {
        console.log(error);
      }
    );
  } */
  onUpdate(event: Event): void {
    this.eventService.updateEvent(event).subscribe(
      (event: Event) => {
        const index = this.events.findIndex((e: Event) => e.idEvents === event.idEvents);
        if (index !== -1) {
          this.events[index] = event;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onDelete(event: Event): void {
    this.eventService.deleteEvent(event.idEvents).subscribe(
      () => {
        this.events = this.events.filter((e: Event) => e.idEvents !== event.idEvents);
        this.selectedEvent = undefined;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }









  /* getAllEvents(headers: HttpHeaders): Observable<Event[]> {
     return this.http.get<Event[]>('http://localhost:8097/GetAllEvents', { headers });
   }
 */
  getAllEvents(){
    this.eventService.getAllEvents().subscribe(res => this.listEvents = res)
  }
  /*
  addEvent(event: Event): void {
    this.eventService.createEvent(event).subscribe(
      (event: Event) => {
        this.events.push(event);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
*/

  /*

    addEvent(event: Event): void {
      // Try to parse the id string to a Long
      try {
        event.idEvents = Long.fromString(event.idEvents.toString());
      } catch (e) {
        console.log("Failed to parse id to Long: " + event.idEvents);
        // Handle the error, such as throwing an exception or returning a default value
        return;
      }
      this.eventService.createEvent(event).subscribe(
        (event: Event) => {
          this.events.push(event);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
   */

  addEvent(event: any){
    this.eventService.addEvent(event).subscribe(() => {
      this.getAllEvents();
      this.form = false;
    });
  }








  private getcourseList(): void {
    this.courseList = [];
    this.serialNumberArray = [];

    this.data.allCourseList().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any, index: number) => {
        let serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.courseList.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
         this.dataSource = new MatTableDataSource<any>(this.courseList);
    this.calculateTotalPages(this.totalData, this.pageSize);
    });


  }
  public sortData(sort: Sort) {
    const data = this.courseList.slice();

    if (!sort.active || sort.direction === '') {
      this.courseList = data;
    } else {
      this.courseList = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.courseList = this.dataSource.filteredData;
  }

public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseList();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getcourseList();
    }
}

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getcourseList();
    }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getcourseList();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (var i = 1; i <= this.totalPages; i++) {
      let limit = pageSize * i;
      let skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
    }
  toggleClass(data: any) {
    data.active = !data.active;
  }
}
export interface pageSelection {
  skip: number;
  limit: number;
}
