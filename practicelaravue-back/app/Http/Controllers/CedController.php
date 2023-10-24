<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ced;


class CedController extends Controller
{
    public function add(Request $request)
    {
        \Log::info('aaa');
        $ced = new Ced();
        $ced->name = $request->input('nameVal');
        $ced->course = $request->input('courseVal');
        $ced->save();
    }
}
