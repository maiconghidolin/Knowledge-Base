<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function json($data, $httpCode = 200)
    {
        return response()->json($data, $httpCode, [], JSON_NUMERIC_CHECK);
    }

    public function error($message, $code = 403)
    {
        return $this->json(['error' => $message], $code);
    }
}
