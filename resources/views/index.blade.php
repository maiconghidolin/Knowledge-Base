@extends('layouts.main')

@section('title', 'FAQ')

@section('page-style')

<link rel="stylesheet" href="{{ asset(mix('css/base/pages/app-faq.css')) }}" />

@endsection

@section('content')

<div class="app-content content faq-application">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-area-wrapper">
        <div class="sidebar-left">
            <div class="sidebar">
                <div class="sidebar-content faq-sidebar">
                    <div class="faq-app-menu">
                        <div class="add-article">
                            <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#new-article-modal">
                                Add article
                            </button>
                        </div>
                        <div class="sidebar-menu-list">
                            <div class="mt-3 px-2 d-flex justify-content-between">
                                <h6 class="section-label mb-1">Categories</h6>
                                <i data-feather="plus" class="cursor-pointer"></i>
                            </div>
                            <div class="list-group list-group-filters">
                                <a href="#" class="list-group-item list-group-item-action active">
                                    <span class="align-middle"> All</span>
                                </a>
                                @foreach($categories as $category)
                                <a href="#" class="list-group-item list-group-item-action" data-id="{{ $category->id }}">
                                    <span class="align-middle"> {{ $category->name }}</span>
                                </a>
                                @endforeach
                            </div>
                            <div class="mt-3 px-2 d-flex justify-content-between">
                                <h6 class="section-label mb-1">Tags</h6>
                                <i data-feather="plus" class="cursor-pointer"></i>
                            </div>
                            <div class="list-group list-group-labels">
                                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                                    <span class="bullet bullet-sm bullet-primary me-1"></span> All
                                </a>
                                @foreach($tags as $tag)
                                <a href="#" class="list-group-item list-group-item-action d-flex align-items-center" data-id="{{ $tag->id }}">
                                    <span class="bullet bullet-sm bullet-success me-1"></span> {{ $tag->name }}
                                </a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="content-right">
            <div class="content-wrapper">
                <div class="content-body">
                    <div class="body-content-overlay"></div>
                    <div class="faq-app-list">

                        <!-- faq search starts -->
                        <div class="app-fixed-search d-flex align-items-center">
                            <div class="sidebar-toggle d-block d-lg-none ms-1">
                                <i data-feather="menu" class="font-medium-5"></i>
                            </div>
                            <div class="d-flex align-content-center justify-content-between w-100">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i data-feather="search" class="text-muted"></i></span>
                                    <input type="text" class="form-control" id="faq-search" placeholder="Search article" aria-label="Search..." aria-describedby="faq-search" />
                                </div>
                            </div>
                        </div>
                        <!-- faq search ends -->

                        <!-- faq List starts -->
                        <div class="faq-article-list-wrapper list-group">
                            <ul class="faq-article-list media-list" id="faq-article-list">
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Fix Responsiveness for new structure 💻</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 08</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Plan a party for development team 🎁</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-danger">High</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 30</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Hire 5 new Fresher or Experienced, frontend and backend developers </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-info">Update</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 28</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Skype Tommy for project status & report</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-danger">High</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 18</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Send PPT with real-time reports</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 22</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Submit quotation for Abid's ecommerce website and admin project </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 24</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Reminder to mail clients for holidays</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 27</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Refactor Code and fix the bugs and test it on server </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 27</small>
                                        </div>
                                    </div>
                                </li>




                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Fix Responsiveness for new structure 💻</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 08</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Plan a party for development team 🎁</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-danger">High</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 30</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Hire 5 new Fresher or Experienced, frontend and backend developers </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-info">Update</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 28</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Skype Tommy for project status & report</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-danger">High</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 18</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Send PPT with real-time reports</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 22</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Submit quotation for Abid's ecommerce website and admin project </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 24</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Reminder to mail clients for holidays</span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-primary">Team</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 27</small>
                                        </div>
                                    </div>
                                </li>
                                <li class="faq-item">
                                    <div class="faq-title-wrapper">
                                        <div class="faq-title-area">
                                            <div class="title-wrapper">
                                                <span class="faq-title">Refactor Code and fix the bugs and test it on server </span>
                                            </div>
                                        </div>
                                        <div class="faq-item-action">
                                            <div class="badge-wrapper me-1">
                                                <span class="badge rounded-pill badge-light-success">Low</span>
                                                <span class="badge rounded-pill badge-light-warning">Medium</span>
                                            </div>
                                            <small class="text-nowrap text-muted me-1">Aug 27</small>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <div class="no-results">
                                <h5>No Items Found</h5>
                            </div>
                        </div>
                        <!-- faq List ends -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('page-script')

<script src="{{asset('js/scripts/pages/app-faq.js')}}"></script>

@endsection