<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function index() {
        $tasks = Task::all();

        $data = [
            'tasks' => $tasks,
            'status' => 200
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        if(!$task) {
            $data = [
                'message' => 'Error al crear la tarea',
                'status' => 500
            ];
            return response()->json($data, 500);
        }

        $data = [
            'task' => $task,
            'status' => 201
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        $task = Task::find($id);

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            $data = [
                'message' => 'Error en la validacion de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data, 400);
        }

        $task->title = $request->title;
        $task->description = $request->description;
        $task->status = $request->status;

        $task->save();

        $data = [
            'message' => 'Estudiante actualizado',
            'task' => $task,
            'status' => 400
        ];

        return response()->json($data, 200);
    }

    public function destroy($id) {
        $task = Task::find($id);

        $task->delete();
        
        $data = [
            'message' => 'Tarea eliminada',
            'status' => 400
        ];
        return response()->json($data, 200);
    }
}
