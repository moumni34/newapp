<?php $page="instructor-reviews";?>
@extends('layout.mainlayout')
@section('content')	
<!-- Page Wrapper -->
<div class="page-content">
    <div class="container">
        <div class="row">
            
            @component('components.sidebar')   
            @endcomponent
            
            <!-- Instructor Dashboard -->
            <div class="col-xl-9 col-lg-8 col-md-12">	
                <div class="row">
                    <div class="col-md-12">
                        <div class="settings-widget">
                            <div class="settings-inner-blk p-0">
                                <div class="sell-course-head comman-space">
                                    <h3>Reviews</h3>
                                    <p>You have full control to manage your own account setting.</p>
                                </div>
                                <div class="comman-space pb-0">
                                    <div class="instruct-search-blk mb-0">
                                        <div class="show-filter all-select-blk">
                                            <form action="#">
                                                <div class="row gx-2 align-items-center">	
                                                    <div class="col-md-6 col-lg-3 col-item">
                                                        <div class="form-group select-form mb-1">
                                                            <select class="form-select select"  name="sellist1">
                                                                <option>All</option>
                                                                <option>review 1</option>
                                                                <option>review 2</option>
                                                                <option>review 3</option>
                                                            </select>
                                                        </div>
                                                    </div>	
                                                    <div class="col-md-6 col-lg-3 col-item">
                                                        <div class="form-group select-form mb-1">
                                                            <select class="form-select select"  name="sellist1">
                                                                <option>Rating</option>
                                                                <option>5</option>
                                                                <option>4</option>
                                                                <option>3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-3 col-item">
                                                        <div class="form-group select-form mb-1">
                                                            <select class="form-select select"  name="sellist1">
                                                                <option>Sort</option>
                                                                <option>Sort 1</option>
                                                                <option>Sort 2</option>
                                                                <option>Sort 3</option>
                                                            </select>
                                                        </div>
                                                    </div>	
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="comman-space bdr-bottom-line">
                                    <div class="instruct-review-blk ">
                                        <div class="review-item">
                                            <div class="instructor-wrap border-0 m-0">
                                                <div class="about-instructor">
                                                    <div class="abt-instructor-img">
                                                        <a href="{{url('instructor-profile')}}"><img src="{{ URL::asset('/assets/img/user/user1.jpg')}}" alt="img" class="img-fluid"></a>
                                                    </div>
                                                    <div class="instructor-detail">
                                                        <h5><a href="{{url('instructor-profile')}}">Nicole Brown</a></h5>
                                                        <p>UX/UI Designer</p>
                                                    </div>
                                                </div>
                                                <div class="rating">							
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p class="rev-info">“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “</p>
                                            <a href="javascript:;" class="btn btn-reply"><i class="feather-corner-up-left"></i> Respond</a>
                                        </div>
                                    </div>								
                                </div>
                                <div class="comman-space bdr-bottom-line">
                                    <div class="instruct-review-blk ">
                                        <div class="review-item">
                                            <div class="instructor-wrap border-0 m-0">
                                                <div class="about-instructor">
                                                    <div class="abt-instructor-img">
                                                        <a href="{{url('instructor-profile')}}"><img src="{{ URL::asset('/assets/img/user/user2.jpg')}}" alt="img" class="img-fluid"></a>
                                                    </div>
                                                    <div class="instructor-detail">
                                                        <h5><a href="{{url('instructor-profile')}}">Jesse Stevens</a></h5>
                                                        <p>UX/UI Designer</p>
                                                    </div>
                                                </div>
                                                <div class="rating">							
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p class="rev-info">“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “</p>
                                            <a href="javascript:;" class="btn btn-reply"><i class="feather-corner-up-left"></i> Respond</a>
                                        </div>
                                    </div>								
                                </div>
                                <div class="comman-space bdr-bottom-line">
                                    <div class="instruct-review-blk ">
                                        <div class="review-item">
                                            <div class="instructor-wrap border-0 m-0">
                                                <div class="about-instructor">
                                                    <div class="abt-instructor-img">
                                                        <a href="{{url('instructor-profile')}}"><img src="{{ URL::asset('/assets/img/user/user3.jpg')}}" alt="img" class="img-fluid"></a>
                                                    </div>
                                                    <div class="instructor-detail">
                                                        <h5><a href="{{url('instructor-profile')}}">John Smith</a></h5>
                                                        <p>UX/UI Designer</p>
                                                    </div>
                                                </div>
                                                <div class="rating">							
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p class="rev-info">“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “</p>
                                            <a href="javascript:;" class="btn btn-reply"><i class="feather-corner-up-left"></i> Respond</a>
                                        </div>
                                    </div>								
                                </div>
                                <div class="comman-space">
                                    <div class="instruct-review-blk ">
                                        <div class="review-item">
                                            <div class="instructor-wrap border-0 m-0">
                                                <div class="about-instructor">
                                                    <div class="abt-instructor-img">
                                                        <a href="{{url('instructor-profile')}}"><img src="{{ URL::asset('/assets/img/user/user4.jpg')}}" alt="img" class="img-fluid"></a>
                                                    </div>
                                                    <div class="instructor-detail">
                                                        <h5><a href="{{url('instructor-profile')}}">Stella Johnson</a></h5>
                                                        <p>UX/UI Designer</p>
                                                    </div>
                                                </div>
                                                <div class="rating">							
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p class="rev-info">“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “</p>
                                            <a href="javascript:;" class="btn btn-reply"><i class="feather-corner-up-left"></i> Respond</a>
                                        </div>
                                    </div>								
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
            <!-- /Instructor Dashboard -->
            
        </div>
    </div>
</div>	
<!-- /Page Wrapper -->
@endsection